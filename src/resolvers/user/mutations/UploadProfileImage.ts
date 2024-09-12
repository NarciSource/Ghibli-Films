import { createWriteStream } from 'fs';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import IContext from '../../../apollo/IContext';
import { User } from '../../../entities/User';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';

@Resolver(User)
export default class UploadProfileImageMutationResolver {
    @UseMiddleware(isAuthenticated)
    @Mutation(() => Boolean)
    async uploadProfileImage(
        @Ctx()
        { verifiedUser }: IContext,
        @Arg('file', () => GraphQLUpload) { createReadStream, filename }: FileUpload,
    ): Promise<boolean> {
        const readFileName = verifiedUser?.userId + filename;
        const filePath = `public/${readFileName}`;
        // 업로드된 파일 읽기 스트림
        const readStream = createReadStream();
        // 파일 저장을 위한 쓰기 스트림
        const writeStream = createWriteStream(filePath);

        return new Promise((resolve, reject) =>
            readStream
                // 쓰기 스트림으로 전달
                .pipe(writeStream)
                // 파일 저장 완료
                .on('finish', () => {
                    // DB에 프로필 사진 경로 저장
                    User.update({ id: verifiedUser?.userId }, { profileImage: readFileName })
                        .then(() => resolve(true))
                        .catch((error) =>
                            reject(error instanceof Error ? error : new Error(String(error))),
                        );
                })
                .on('error', () => reject(Error('file upload failed'))),
        );
    }
}

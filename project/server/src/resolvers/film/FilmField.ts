import { Resolver, FieldResolver, Root } from 'type-graphql';
import { Director } from 'entities/Director';
import { Film } from 'entities/Film';

@Resolver(Film)
export default class FilmFieldResolver {
    // 영화 리스트 안의 감독정보
    @FieldResolver(() => Director, { description: '감독' })
    // @Root: 부모객체 참조
    async director(@Root() { directorId }: Film): Promise<Director> {
        return await Director.findOne({ where: { id: directorId } });
    }
}

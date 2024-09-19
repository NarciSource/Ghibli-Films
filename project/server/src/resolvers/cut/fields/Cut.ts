import { Resolver, FieldResolver, Root, Int, Ctx } from 'type-graphql';
import IContext from 'apollo/IContext';
import { Cut } from 'entities/Cut';
import { Film } from 'entities/Film';

@Resolver(Cut)
export default class CutFieldResolver {
    @FieldResolver(() => Film, { nullable: true })
    async film(@Root() cut: Cut): Promise<Film> {
        return await Film.findOne({ where: { id: cut.filmId } });
    }

    @FieldResolver(() => Int)
    async votesCount(
        @Root() cut: Cut,
        @Ctx() { loaders: { cutVoteLoader } }: IContext,
    ): Promise<number> {
        const cutVotes = await cutVoteLoader.load({ cutId: cut.id });

        return cutVotes.length;
    }

    @FieldResolver(() => Boolean)
    async isVoted(
        @Root() cut: Cut,
        @Ctx() { verifiedUser, loaders: { cutVoteLoader } }: IContext,
    ): Promise<boolean> {
        if (verifiedUser) {
            const votes = await cutVoteLoader.load({ cutId: cut.id });
            const isUserVoted = votes.some((vote) => vote.userId === verifiedUser.userId);

            if (isUserVoted) {
                return true;
            }
        }
        return false;
    }
}

import DataLoader from 'dataloader';
import { In } from 'typeorm';
import { Cut } from '../entities/Cut';
import { CutVote } from '../entities/CutVote';

type CutVoteKey = {
    cutId: Cut['id'];
};

export default function createCutVoteLoader(): DataLoader<CutVoteKey, CutVote[]> {
    // N+1 문제 해결을 위한 DataLoader
    return new DataLoader<CutVoteKey, CutVote[]>(async (keys) => {
        // 배치 로딩
        const cutIds = keys.map((key) => key.cutId);
        const votes = await CutVote.find({ where: { cutId: In(cutIds) } });
        const result = keys.map((key) => votes.filter((vote) => vote.cutId === key.cutId));

        return result;
    });
}

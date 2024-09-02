import createCutVoteLoader from './cutVoteLoader';

export default function createLoaders() {
    return {
        cutVoteLoader: createCutVoteLoader(),
    };
}

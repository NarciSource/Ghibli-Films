import { Heading } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import CommonLayout from '../components/CommonLayout';
import FilmList from '../components/film/FilmList';

export default function Search(): React.ReactElement {
    const [searchPrams] = useSearchParams();
    const q = searchPrams.get('q') || undefined;

    return (
        <CommonLayout>
            <Heading size="lg">검색결과</Heading>
            <FilmList search={q} />
        </CommonLayout>
    );
}

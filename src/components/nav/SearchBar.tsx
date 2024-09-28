import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const { register, handleSubmit } = useForm<{ q: string }>();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(({ q }) =>
        navigate(`/search?q=${q}`),
    );

    return (
        <form onSubmit={onSubmit}>
            <InputGroup mr={0} w="30">
                <InputLeftElement>
                    <FaSearch />
                </InputLeftElement>
                <Input focusBorderColor="teal.400" placeholder="검색" {...register('q')}></Input>
            </InputGroup>
        </form>
    );
}

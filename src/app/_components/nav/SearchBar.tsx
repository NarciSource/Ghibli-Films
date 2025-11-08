import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { Input, InputGroup } from '@chakra-ui/react';

export default function SearchBar() {
  const { register, handleSubmit } = useForm<{ q: string }>();
  const navigate = useRouter();

  const onSubmit = handleSubmit(({ q }) => navigate.push(`/search?q=${q}`));

  return (
    <form onSubmit={onSubmit}>
      <InputGroup mr={0} w='30' startElement={<FaSearch />}>
        <Input css={{ '--focus-color': 'teal.400' }} placeholder='검색' {...register('q')}></Input>
      </InputGroup>
    </form>
  );
}

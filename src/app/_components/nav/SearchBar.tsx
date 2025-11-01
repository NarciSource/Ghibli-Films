import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <form>
      <InputGroup mr={0} w='30'>
        <InputLeftElement>
          <FaSearch />
        </InputLeftElement>
        <Input focusBorderColor='teal.400' placeholder='검색'></Input>
      </InputGroup>
    </form>
  );
}

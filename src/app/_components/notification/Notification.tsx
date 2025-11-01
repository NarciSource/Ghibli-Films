import {
  Box,
  CircularProgress,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import useRealtimeAlarm from './useRealtimeAlarm';

export default function Notification(): React.ReactElement {
  const loading = false; // 알림 로딩 상태

  // 실시간 알림 구독 훅
  useRealtimeAlarm();

  return (
    <Menu placement='bottom-end' closeOnSelect={false} isLazy>
      <Box position='relative'>
        <MenuButton
          as={IconButton}
          size='md'
          fontSize='lg'
          variant='ghost'
          color='current'
          icon={<FaBell />}
          aria-label='open notification popover'
        />
      </Box>
      <MenuList maxH={350} maxW={400} overflowY='auto' w='100%'>
        <Text px={4} py={2}>
          알림 목록
        </Text>
        <MenuDivider />

        {loading ? (
          <CircularProgress isIndeterminate />
        ) : (
          <Text px={4} py={2}>
            알림이 없습니다.
          </Text>
        )}
      </MenuList>
    </Menu>
  );
}

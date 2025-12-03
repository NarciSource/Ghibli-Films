import { FaBell } from 'react-icons/fa';
import {
  Box,
  For,
  IconButton,
  Menu,
  MenuContent,
  MenuPositioner,
  MenuTrigger,
  Portal,
  ProgressCircle,
  Show,
  Text,
} from '@chakra-ui/react';

import { useNotificationsQuery } from '@/graphql/api/hooks';
import NotificationItem from './NotificationItem';
import useRealtimeAlarm from './useRealtimeAlarm';

export default function Notification(): React.ReactElement {
  const { data, loading } = useNotificationsQuery();

  // 실시간 알림 구독 훅
  useRealtimeAlarm();

  return (
    <Menu.Root closeOnSelect={false}>
      <MenuTrigger asChild>
        <IconButton
          size='md'
          fontSize='lg'
          variant='ghost'
          color='current'
          aria-label='open notification popover'
        >
          <FaBell />
        </IconButton>
      </MenuTrigger>

      <Portal>
        <MenuPositioner>
          <MenuContent maxH={350} maxW={400} overflowY='auto' w='100%'>
            <Text px={4} py={2}>
              알림 목록
            </Text>
            <Menu.Separator />

            <Show when={!loading} fallback={<Progress />}>
              <Show
                when={data && data.notifications.length !== 0 ? data.notifications : null}
                fallback={
                  <Text px={4} py={2}>
                    알림이 없습니다.
                  </Text>
                }
              >
                {(notifications) => (
                  <For each={notifications}>
                    {(n) => <NotificationItem key={n.id} notification={n} />}
                  </For>
                )}
              </Show>
            </Show>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu.Root>
  );
}

const Progress = () => (
  <Box display='flex' justifyContent='center' py={4}>
    <ProgressCircle.Root size='sm'>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  </Box>
);

import { useToast } from '@chakra-ui/react';

export default function useRealtimeAlarm() {
  const toast = useToast({ position: 'top-right', isClosable: true, status: 'info' });
}

import { Box, MenuItem, Text } from '@chakra-ui/react';

import type { Notification as INotification } from '@/graphql/api/type';

export default function NotificationItem({
  notification,
}: {
  notification: INotification;
}): React.ReactElement {
  return (
    <MenuItem value='' cursor='pointer'>
      <Box position='relative' w='100%'>
        <Text>{notification.text}</Text>
        <Text fontSize='xs' color='gray.500'>
          {new Date(parseInt(notification.createdAt, 10)).toLocaleString()}
        </Text>
      </Box>
    </MenuItem>
  );
}

import { Box, MenuItem, Text } from '@chakra-ui/react';

export default function NotificationItem({
  notification,
}: {
  notification: { text: string; createdAt: string };
}): React.ReactElement {
  return (
    <MenuItem cursor='pointer'>
      <Box position='relative' w='100%'>
        <Text>{notification.text}</Text>
        <Text fontSize='xs' color='gray.500'>
          {new Date(parseInt(notification.createdAt, 10)).toLocaleString()}
        </Text>
      </Box>
    </MenuItem>
  );
}

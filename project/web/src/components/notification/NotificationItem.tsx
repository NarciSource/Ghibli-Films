import { MenuItem, Box, Text } from "@chakra-ui/react";
import { Notification as INotification } from "../../generated/graphql";

export default function NotificationItem({ notification }: { notification: INotification }): React.ReactElement {
    return (
        <MenuItem cursor="pointer">
            <Box position="relative" w="100%">
                <Text>{notification.text}</Text>
                <Text fontSize="xs" color="gray.500">
                    {new Date(parseInt(notification.createdAt, 10)).toLocaleString()}
                </Text>
            </Box>
        </MenuItem>
    );
}

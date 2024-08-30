import { Text, Box, CircularProgress, IconButton, Menu, MenuButton, MenuList, MenuDivider } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { useNotificationsQuery } from "../../generated/graphql";
import NotificationItem from "./NotificationItem";
import useRealtimeAlarm from "./useRealtimeAlarm";

export default function Notification(): React.ReactElement {
    const { data, loading, subscribeToMore } = useNotificationsQuery();

    useRealtimeAlarm({ subscribeToMore });

    return (
        <Menu placement="bottom-end" closeOnSelect={false} isLazy>
            <Box position="relative">
                <MenuButton as={IconButton} size="md" fontSize="lg" variant="ghost" color="current" icon={<FaBell />} aria-label="open notification popover" />
            </Box>
            <MenuList maxH={350} maxW={400} overflowY="auto" w="100%">
                <Text px={4} py={2}>
                    알림 목록
                </Text>
                <MenuDivider />

                {loading ? (
                    <CircularProgress isIndeterminate />
                ) : (
                    <>
                        {!data || data?.notifications.length === 0 ? (
                            <Text px={4} py={2}>
                                알림이 없습니다.
                            </Text>
                        ) : (
                            data?.notifications.map((n) => <NotificationItem key={n.id} notification={n} />)
                        )}
                    </>
                )}
            </MenuList>
        </Menu>
    );
}

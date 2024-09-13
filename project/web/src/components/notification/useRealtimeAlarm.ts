import { Reference, useSubscription } from '@apollo/client';
import { AsStoreObject } from '@apollo/client/utilities';
import { useToast } from '@chakra-ui/react';
import { apolloClient } from '../../apollo/createApolloClient';
import {
    NewNotificationDocument,
    NewNotificationSubscription,
    Notification,
} from '../../generated/graphql';

export default function useRealtimeAlarm() {
    const toast = useToast({ position: 'top-right', isClosable: true, status: 'info' });

    // NewNotificationDocument: gql tag로 감싸진 구독 문서
    useSubscription<NewNotificationSubscription>(NewNotificationDocument, {
        onData: ({ data }) => {
            if (!data?.data) return;

            const newNotification: Notification = data.data.newNotification;

            toast({ title: '새 알림이 도착했습니다.', description: newNotification.text });

            // 캐시 수동 업데이트
            apolloClient.cache.modify({
                fields: {
                    notifications(
                        existing: readonly (Reference | AsStoreObject<Notification>)[] = [],
                    ) {
                        return [newNotification, ...existing];
                    },
                },
            });
        },
    });
}

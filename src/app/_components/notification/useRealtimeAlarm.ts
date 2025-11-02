import { type Reference, useSubscription } from '@apollo/client';
import type { AsStoreObject } from '@apollo/client/utilities';
import { createToaster } from '@chakra-ui/react';
import { apolloClient } from '@/apollo/createApolloClient';
import { NewNotificationDocument } from '@/graphql/api/hooks';
import type { NewNotificationSubscription } from '@/graphql/api/operations';
import type { Notification as INotification } from '@/graphql/api/type';

export default function useRealtimeAlarm() {
  const toaster = createToaster({ placement: 'top-end' });

  // NewNotificationDocument: gql tag로 감싸진 구독 문서
  useSubscription<NewNotificationSubscription>(NewNotificationDocument, {
    onData: ({ data }) => {
      if (!data?.data) return;

      const newNotification: INotification = data.data.newNotification;

      toaster.create({
        title: '새 알림이 도착했습니다.',
        description: newNotification.text,
        closable: true,
        type: 'info',
      });

      // 캐시 수동 업데이트
      apolloClient.cache.modify({
        fields: {
          notifications(existing: readonly (Reference | AsStoreObject<INotification>)[] = []) {
            return [newNotification, ...existing];
          },
        },
      });
    },
  });
}

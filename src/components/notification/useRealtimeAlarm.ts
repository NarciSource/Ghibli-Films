import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { OperationVariables, SubscribeToMoreOptions } from "@apollo/client";
import { Exact, NewNotificationDocument, NewNotificationSubscription, NotificationsQuery } from "../../generated/graphql";

type Props = {
    subscribeToMore?: <
        TSubscriptionData = NotificationsQuery,
        TSubscriptionVariables extends OperationVariables = Exact<{
            [key: string]: never;
        }>
    >(
        options: SubscribeToMoreOptions<NotificationsQuery, TSubscriptionVariables, TSubscriptionData>
    ) => () => void;
};

export default function useRealtimeAlarm({ subscribeToMore }: Props) {
    const toast = useToast({
        position: "top-right",
        isClosable: true,
        status: "info",
    });

    useEffect(() => {
        if (!subscribeToMore) {
            return;
        }
        const unsubscribe = subscribeToMore<NewNotificationSubscription>({
            // gql tag로 감싸진 구독 문서
            document: NewNotificationDocument,
            // 구독 데이터가 도착했을 때 호출되는 함수
            updateQuery: (prev: any, { subscriptionData: { data } }: any) => {
                if (data) {
                    const newNotification = data.newNotification;

                    toast({
                        title: "새 알림이 도착했습니다.",
                        description: newNotification.text,
                    });

                    return {
                        __typename: "Query",
                        notifications: [newNotification, ...prev.notifications],
                    };
                } else {
                    return prev;
                }
            },
        });
        return () => unsubscribe();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subscribeToMore]);
}

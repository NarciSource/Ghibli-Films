import { Avatar, Button, Menu, MenuButton, MenuList, Stack } from "@chakra-ui/react";
import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { MeQuery, useMeQuery } from "../../generated/graphql";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import LogoutItem from "./LogoutItem";
import ProfileImageItem from "./ProfileImageItem";
import Notification from "../notification/Notification";

export default function UserMenu(): React.ReactElement {
    const accessToken = localStorage["access_token"];
    const { data } = useMeQuery({ skip: !accessToken });

    const isLoggedIn = useMemo(() => accessToken && data?.me?.id, [accessToken, data?.me]);
    const profileImageSrc = useMemo(() => (data?.me ? `${process.env.REACT_APP_API_HOST}/${data.me.profileImage}` : undefined), [data?.me]);

    return isLoggedIn ? (
        <Stack justify="flex-end" alignItems="center" direction="row" spacing={3}>
            <ColorModeSwitcher />

            <Notification />

            <Menu>
                <MenuButton>
                    <Avatar size="sm" src={profileImageSrc} />
                </MenuButton>
                <MenuList>
                    <ProfileImageItem {...(data?.me as NonNullable<MeQuery["me"]>)} />

                    <LogoutItem />
                </MenuList>
            </Menu>
        </Stack>
    ) : (
        <Stack justify="flex-end" direction="row" spacing="6">
            <ColorModeSwitcher />

            <Button as={RouterLink} to="/login" fontSize="sm" fontWeight="400" variant="link">
                로그인
            </Button>
            <Button as={RouterLink} to="/signup" display={{ base: "none", md: "inline-flex" }} fontSize="sm" fontWeight="600" colorScheme="teal">
                시작하기
            </Button>
        </Stack>
    );
}

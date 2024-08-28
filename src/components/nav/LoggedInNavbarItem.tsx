import { ChangeEvent } from 'react';
import { Avatar, Text, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useLogoutMutation, useMeQuery, useUploadProfileImageMutation } from '../../generated/graphql';
import { useApolloClient } from '@apollo/client';

export default function LoggedInNavbarItem(): React.ReactElement {
    const [logout, { loading: logoutLoading }] = useLogoutMutation();
    const client = useApolloClient();

    const accessToken = localStorage["access_token"];
    const { data: userData } = useMeQuery({ skip: !accessToken });

    const [upload] = useUploadProfileImageMutation();
    const profileImageSrc = `${process.env.REACT_APP_API_HOST}/${userData?.me?.profileImage}`;

    async function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const file = e.target.files[0];

            await upload({
                variables: { file },
                update: (cache) => cache.evict({ fieldName: "me" }),
            });
        }
    }

    async function onLogoutClick() {
        try {
            await logout();

            localStorage.removeItem('access_token');

            await client.resetStore(); // 아폴로 클라이언트 캐시 리셋
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Stack justify="flex-end" alignItems="center" direction="row" spacing={3}>
            <ColorModeSwitcher />

            <Menu>
                <MenuButton>
                    <Avatar size="sm" src={profileImageSrc} />
                </MenuButton>
                <MenuList>
                    <Flex px={4} pt={2} pb={4}>
                        <label htmlFor="upload-profile-image">
                            <input id="upload-profile-image" type="file" accept="image/*" hidden onChange={handleImageUpload} />
                            <Avatar size="md" src={profileImageSrc} mr={4} cursor="pointer" />
                        </label>

                        <Box>
                            <Text fontWeight="bold">{userData?.me?.username}</Text>
                            <Text>{userData?.me?.email}</Text>
                        </Box>
                    </Flex>
                    <MenuItem onClick={onLogoutClick} isDisabled={logoutLoading}>
                        로그아웃
                    </MenuItem>
                </MenuList>
            </Menu>
        </Stack>
    );
}

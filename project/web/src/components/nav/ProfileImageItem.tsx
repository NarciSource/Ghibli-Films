import { Text, Flex, Avatar, Box } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { MeQuery, useUploadProfileImageMutation } from "../../generated/graphql";

export default function ProfileImageItem({ profileImage, username, email }: NonNullable<MeQuery["me"]>): React.ReactElement {
    const [upload] = useUploadProfileImageMutation();
    const profileImageSrc = `${process.env.REACT_APP_API_HOST}/${profileImage}`;

    async function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const file = e.target.files[0];

            await upload({
                variables: { file },
                update: (cache) => cache.evict({ fieldName: "me" }),
            });
        }
    }

    return (
        <Flex px={4} pt={2} pb={4}>
            <label htmlFor="upload-profile-image">
                <input id="upload-profile-image" type="file" accept="image/*" hidden onChange={handleImageUpload} />
                <Avatar size="md" src={profileImageSrc} mr={4} cursor="pointer" />
            </label>

            <Box>
                <Text fontWeight="bold">{username}</Text>
                <Text>{email}</Text>
            </Box>
        </Flex>
    );
}

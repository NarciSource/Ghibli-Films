import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import SearchBar from "./SearchBar";

export function Navbar() {
    return (
        <Box zIndex={10} position="fixed" w="100%" bg={useColorModeValue("white", "gray.800")} borderBottom={1} borderStyle="solid" borderColor={useColorModeValue("gray.200", "gray.700")} py={{ base: 2 }} px={{ base: 4 }}>
            <Flex color={useColorModeValue("gray.600", "white")} maxW="960px" minH="60px" align="center" m="auto">
                <Flex flex={{ base: 1, md: "auto" }}>
                    <Link as={RouterLink} to="/" fontFamily="heading" fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
                        GhibliBestCut
                    </Link>
                </Flex>

                <SearchBar />

                <UserMenu />
            </Flex>
        </Box>
    );
}

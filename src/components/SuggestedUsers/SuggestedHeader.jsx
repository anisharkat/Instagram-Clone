import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/AuthStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
	const { handleLogout, isLoggingOut } = useLogout();
	const authUser = useAuthStore((state) => state.user);

	if (!authUser) return null;
	
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Link to={`${authUser.username}`}>
            <Avatar size={"lg"} src={authUser.profilePicURL}/>
            </Link>
            <Flex display={"block"}>
            <Text fontSize={12} fontWeight={"bold"} mb={1}>
            <Link to={`${authUser.username}`}>
                {authUser.username}
                </Link>
            </Text>
            <Text fontSize={12} color={"gray.400"} mt={1}>
                {authUser.fullName}
            </Text>
            </Flex>

        </Flex>
        <Button
        size={"xs"}
        background={"transparent"}
        _hover={{color: "white"}}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
        style={{textDecoration:"none"}}
        cursor={"pointer"}
        >
            Log Out
        </Button>
    </Flex>
	);
};

export default SuggestedHeader;

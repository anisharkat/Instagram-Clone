import { Flex, Button, Avatar, VStack, Box } from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import useFollowUser from "../../hooks/useFollowUser";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, onClose, setUser }) => {
const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
const authUser = useAuthStore((state) => state.user);

const handleLinkClick = () => {
	onClose();
};

const onFollowUser = async () => {
	await handleFollowUser();
	setUser({
		...user,
		followers: isFollowing
			? user.followers.filter((follower) => follower.uid !== authUser.uid)
			: [...user.followers, authUser],
	});
};

return (
	<Flex w={"full"} alignItems={"center"} justifyContent={"space-between"}>
		<Flex alignItems={"center"}>
			<Avatar src={user.profilePicURL} size={"md"} />
			<VStack spacing={2} mx={3} alignItems={"flex-start"}>
				<Box fontSize={12} fontWeight={"bold"}>
					<Link to={`/${user.username}`} onClick={handleLinkClick}>
						{user.fullName}
					</Link>
				</Box>
				<Box fontSize={11} color={"gray.500"} fontWeight={"bold"}>
					{user.followers.length} Followers
				</Box>
			</VStack>
		</Flex>
		{authUser.uid !== user.uid && (
			<Button
				fontSize={13}
				bg={"transparent"}
				p={0}
				h={"max-content"}
				fontWeight={"medium"}
				color={"blue.400"}
				cursor={"pointer"}
				_hover={{ color: "white" }}
				onClick={onFollowUser}
				isLoading={isUpdating}
			>
				{isFollowing ? "Unfollow" : "Follow"}
			</Button>
		)}
	</Flex>
);
};

export default SuggestedUser;

import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import Reels from "./Reels"
import Messages from "./Messages"


const SidebarItems = () => {
	return (
		<>
			<Home/>
			<Search />
			<Reels/>
			<Messages/>
			<Notifications />
			<CreatePost />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;

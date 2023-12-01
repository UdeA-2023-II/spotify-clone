import { Button } from "./Button";
import { IconLink } from "./IconLink";
import {
  MdHomeFilled,
  MdSearch,
  MdOutlineSavedSearch,
  MdOutlineHome,
  MdVerticalSplit,
  MdPlaylistAdd,
} from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Card } from "./Card";

const Sidebar = () => {
  return (
    <aside className="debug w-[450px] p-2 flex flex-col gap-2">
      <div className="debug dark-card flex flex-col gap-4">
        <IconLink
          isActive
          text="Home"
          ActiveIcon={MdHomeFilled}
          InactiveIcon={MdOutlineHome}
        />
        <IconLink
          text="Search"
          ActiveIcon={MdSearch}
          InactiveIcon={MdOutlineSavedSearch}
        />
      </div>
      <div className="debug h-full dark-card flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-4  items-center  text-spotify-inactive-link-gray hover:text-white hover:cursor-pointer">
            <MdVerticalSplit className="text-2xl" />
            <span className="font-semibold">Your Library</span>
          </div>
          <div className="hover:bg-gray-600 rounded-full p-2 hover:cursor-pointer">
            <AiOutlinePlus />
          </div>
        </div>

        <Card
          title="Create Your First Playlist"
          description="It's easy, we'll help you"
          buttonText="Create Playlist"
        />
        <Card
          title="Let's Find Some Podcast to Follow"
          description="We'll keep you updated on new episodes"
          buttonText="Browse Podcasts"
        />
      </div>
    </aside>
  );
};

export { Sidebar };

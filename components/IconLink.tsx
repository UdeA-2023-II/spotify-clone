import { IconType } from "react-icons";

interface IconLinkProps {
  text: string;
  ActiveIcon: IconType;
  InactiveIcon: IconType;
  isActive?: boolean;
}

const IconLink = ({
  text,
  ActiveIcon,
  InactiveIcon,
  isActive = false,
}: IconLinkProps) => {
  return (
    <div
      className={`flex align-middle items-center gap-4 ${
        isActive
          ? "text-white"
          : "inactive-link-text"
      }`}
    >
      <span className="text-3xl">
        {isActive ? <ActiveIcon /> : <InactiveIcon />}
      </span>
      <span className="text-md font-semibold ">{text}</span>
    </div>
  );
};

export { IconLink };

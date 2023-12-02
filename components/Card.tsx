import { Button } from "./Button";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card = ({ title, description, buttonText }: CardProps) => {
  
  
  const handlePlaylistClick = () => {
    console.log("Library Playlists Button Clicked");
  };

  return (
    <div className=" flex flex-col light-card items-start">
      <span className="font-semibold text-lg">{title}</span>
      <span className=" text-md">{description}</span>
      <Button
        text={buttonText}
        type="secondary"
        handleClick={handlePlaylistClick}
      />
    </div>
  );
};

export { Card };

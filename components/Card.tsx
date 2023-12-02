import { useState } from "react";
import { Button } from "./Button";
import { PlaylistDialog } from "./Dialogs/PlaylistDialog";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card = ({ title, description, buttonText }: CardProps) => {
  const [dialogOpen, setOpen] = useState<boolean>(false);

  const handlePlaylistClick = () => {
    setOpen(true);
  };

  console.log(dialogOpen);

  return (
    <div className=" flex flex-col light-card items-start">
      <span className="font-semibold text-lg">{title}</span>
      <span className=" text-md">{description}</span>
      <Button
        text={buttonText}
        type="secondary"
        handleClick={handlePlaylistClick}
      />
      <PlaylistDialog
        setDialogOpen={setOpen}
        dialogOpen={dialogOpen}
        handlePlaylistClick={handlePlaylistClick}
      />
    </div>
  );
};

export { Card };

import Image from "next/image";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard = ({ title, description, image }: PlaylistCardProps) => {
  return (
    <div className="flex flex-col bg-black rounded-md w-[192px] p-4  gap-2 hover:cursor-pointer hover:bg-spotify-gray">
      <Image
        className="rounded-md"
        src={image}
        width={160}
        height={160}
        alt="Picture of the author"
      />
      <span className="text-white font-semibold">{title}</span>
      <span className="text-mid-gray">{description}</span>
    </div>
  );
};

export { PlaylistCard };

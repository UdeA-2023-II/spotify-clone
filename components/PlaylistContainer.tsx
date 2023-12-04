import { PlaylistCard } from "./PlaylistCard";

interface PlaylistContainerProps {
  title: string;
}

const PlaylistContainer = ({ title }: PlaylistContainerProps) => {
  return (
    <section className="debug flex flex-col p-3 gap-4">
      <div className="flex justify-between ">
        <span className="text-white font-bold text-2xl">{title}</span>
        <span className="text-sm text-spotify-gray2 ">Show All</span>
      </div>
      <div className="flex gap-4">
        <PlaylistCard
          title={`Today's Top Hits`}
          description={`Manuel Medrano, Kani Garcia, Piso 21 and more`}
          image={"https://ing-web-spotify-media.s3.amazonaws.com/medrano.jpeg"}
        />
        <PlaylistCard
          title={`Best of Rock: 1993`}
          description={`Big rock tracks from 1993. Cover: Lenny Kravitz`}
          image={"https://ing-web-spotify-media.s3.amazonaws.com/lk.jpeg"}
        />
      </div>
    </section>
  );
};

export { PlaylistContainer };

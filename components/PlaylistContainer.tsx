import { PlaylistCard } from "./PlaylistCard";

interface PlaylistContainerProps {
  title: string;
}

const PlaylistContainer = ({ title }: PlaylistContainerProps) => {
  return (
    <section className="debug flex flex-col gap-4">
      <div className="flex justify-between ">
        <span className="text-white font-bold text-2xl">{title}</span>
        <span className="text-sm text-spotify-gray2 ">Show All</span>
      </div>
      <div className="flex">
        <PlaylistCard
          title={`Today's Top Hits`}
          description={`Manuel Medrano, Kani Garcia, Piso 21 and more`}
          // coverImage="https://seed-mix-image.spotifycdn.com/v6/img/twenty_tens/0i5iO6icb7kxg48thi9gBM/en/default"
        />
      </div>
    </section>
  );
};

export { PlaylistContainer };

import { PlaylistCard } from "./PlaylistCard";

interface PlaylistContainerProps {
  title: string;
  data: {
    title: string;
    description: string;
    image: string;
    id: string;
  }[];
}

const PlaylistContainer = ({ title, data }: PlaylistContainerProps) => {
  return (
    <section className="flex flex-col p-3 gap-4">
      <div className="flex justify-between ">
        <span className="text-white font-bold text-2xl">{title}</span>
        <span className="text-sm text-spotify-gray2 ">Show All</span>
      </div>
      <div className="flex justify-around">
        {data.map((item) => {
          return (
            <PlaylistCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export { PlaylistContainer };

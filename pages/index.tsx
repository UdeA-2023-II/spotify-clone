import { Navbar } from "@/components/Navbar";
import { PlaylistContainer } from "@/components/PlaylistContainer";
import { Sidebar } from "@/components/Sidebar";

const Home = () => {
  return (
    <div className=" bg-black h-screen flex text-white">
      <Sidebar />
      <main className="debug w-full p-2">
        <Navbar />
        <div className="px-5 py-1 bg-gradient-to-br from-gradient-gray to-black">
          <PlaylistContainer title="Spotify Playlists" />
          <PlaylistContainer title="Great First Audiobooks" />
        </div>

        <footer></footer>
      </main>
    </div>
  );
};

export default Home;

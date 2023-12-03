import { Navbar } from "@/components/Navbar";
import { PlaylistContainer } from "@/components/PlaylistContainer";
import { Sidebar } from "@/components/Sidebar";
import { TestDialogContainer } from "@/components/TestDialogContainer";

const Home = () => {
  return (
    <div className=" bg-black h-screen flex text-white">
      <Sidebar />
      <main className="debug w-full p-2 h-full flex flex-col" >
        <Navbar />
        <div className="px-5 py-1 bg-gradient-to-br from-gradient-gray to-black h-full flex flex-col rounded-md gap-4">
          <PlaylistContainer title="Spotify Playlists" />
          <PlaylistContainer title="Great First Audiobooks" />
        </div>

        <footer>
          <TestDialogContainer />
        </footer>
      </main>
    </div>
  );
};

export default Home;

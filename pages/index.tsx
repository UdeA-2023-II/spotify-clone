import { Navbar } from '@/components/Navbar';
import { PlaylistContainer } from '@/components/PlaylistContainer';
import { Sidebar } from '@/components/Sidebar';
import { Playlists } from '@/datos';
// import useSWR from 'swr';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  // const { data, isLoading } = useSWR('/api/data', fetcher);

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  // if (data) {
  return (
    <div className=' bg-black h-screen flex text-white'>
      <Sidebar />
      <main className='w-full p-2 h-full flex flex-col'>
        <Navbar />
        <div className='px-5 py-1 bg-gradient-to-br from-gradient-gray to-black h-full flex flex-col rounded-md gap-4'>
          <PlaylistContainer
            title='Spotify Playlists'
            data={Playlists.playlists}
          />
          <PlaylistContainer title='Focus' data={Playlists.focus} />
        </div>

        <footer></footer>
      </main>
    </div>
  );
  // }
};

export default Home;

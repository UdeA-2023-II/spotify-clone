import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

const Home = () => {
  return (
    <div className=" bg-black h-screen flex text-white">
      <Sidebar />
      <main className="debug w-full p-2">
        <Navbar />
        <section></section>
        <section></section>

        <footer></footer>
      </main>
    </div>
  );
};

export default Home;

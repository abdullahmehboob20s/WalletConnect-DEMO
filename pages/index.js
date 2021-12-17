import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, user, logout, Moralis } = useMoralis();

  if (!isAuthenticated) return <Login />;
  else
    return (
      <div className="">
        <Head>
          <title>Metaverse Challenge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Welcome to the Home</h2>
        <h1>Name : {user.id}</h1>

        <button
          className="bg-red-400 text-white bold  cursor-pointer py-2 px-8 rounded-[5px]"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    );
}

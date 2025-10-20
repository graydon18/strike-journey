import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-9xl font-jersey animate-swell text-denim text-shadow-lg">Strike Journey</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/leagues">
          <button className="bg-blue-500 text-white px-6 py-4 rounded-lg text-xl">
            Leagues
          </button>
        </Link>
        <Link to="/tournaments">
          <button className="bg-green-500 text-white px-6 py-4 rounded-lg text-xl">
            Tournaments
          </button>
        </Link>
        <Link to="/open-bowling">
          <button className="bg-yellow-500 text-white px-6 py-4 rounded-lg text-xl">
            Open Bowling
          </button>
        </Link>
        <Link to="/statistics">
          <button className="bg-purple-500 text-white px-6 py-4 rounded-lg text-xl">
            Statistics
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
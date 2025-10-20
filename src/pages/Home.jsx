import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-8">
      <h1 className="text-7xl sm:text-8xl md:text-9xl text-center mb-12 font-jersey animate-swell text-denim text-shadow-lg">Strike Journey</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <Link to="/leagues" className="w-full">
          <button className="w-full aspect-[3/1] bg-pig hover:bg-pig-shadow text-white rounded-2xl text-2xl font-semibold 
          shadow-md transition-colors duration-300 ease-in-out">
            Leagues
          </button>
        </Link>
        <Link to="/tournaments" className="w-full">
          <button className="w-full aspect-[3/1] bg-salmon hover:bg-salmon-shadow text-white rounded-2xl text-2xl font-semibold 
          shadow-md transition-colors duration-300 ease-in-out">
            Tournaments
          </button>
        </Link>
        <Link to="/open-bowling" className="w-full">
          <button className="w-full aspect-[3/1] bg-aqua hover:bg-aqua-shadow text-white rounded-2xl text-2xl font-semibold 
          shadow-md transition-colors duration-300 ease-in-out">
            Open Bowling
          </button> 
        </Link>
        <Link to="/statistics" className="w-full">
          <button className="w-full aspect-[3/1] bg-peacock hover:bg-peacock-shadow text-white rounded-2xl text-2xl font-semibold 
          shadow-md transition-colors duration-300 ease-in-out">
            Statistics
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
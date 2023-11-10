import "./styles.css";
import { Link } from "react-router-dom";
import { SiReactquery } from "react-icons/si";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col p-6">
      <div>
        <div className="flex items-center gap-2  md:gap-4 text-3xl md:text-4xl lg:text-6xl font-bold">
          <h1>React Query</h1>
          <SiReactquery className="text-amber-700" />
        </div>
        <div className="my-5">
          <li className="underline font-bold text-xl md:text-2xl decoration-pink-400 text-pink-500 ">
            <Link className="hover:text-pink-600" to="/">
              Home
            </Link>
          </li>
          <li className="underline font-bold text-xl md:text-2xl decoration-pink-400 text-pink-500 ">
            <Link className="hover:text-pink-600" to="/products">
              Products
            </Link>
          </li>

          <p className="font-semibold text-lg md:text-xl mt-4 mb-2">
            Why It is Important
          </p>

          <ul className="list-disc text-sm font-light md:font-md">
            <li>
              Caching... (possibly the hardest thing to do in programming)
            </li>
            <li>
              Deduping multiple requests for the same data into a single request
            </li>
            <li>Updating "out of date" data in the background</li>
            <li>Knowing when data is "out of date"</li>
            <li>Reflecting updates to data as quickly as possible</li>
            <li>
              Performance optimizations like pagination and lazy loading data
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

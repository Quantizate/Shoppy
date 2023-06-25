import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col max-w-screen-2xl items-center m-auto mb-20">
      <div className="flex flex-col items-center mt-4">
        <img className="max-w-screen-sm" src="/404.jpg" alt="404" />
      </div>
      {/* <p class="text-2xl mt-4">Page not found</p> */}
      <div class="mt-8">
        <Link
          to={`/`}
          class="p-4 m-4 text-lg bg-sky-100 text-blue-500 rounded-lg border hover:text-sky-100 hover:bg-blue-500 drop-shadow-md"
        >
          Go back to HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

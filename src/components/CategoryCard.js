import { Link } from "react-router-dom";

const CategoryCard = ({ categories = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            CATEGORIES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Browse by category
          </h1>
        </div>
        <div className="flex flex-wrap place-items-center max-w-screen-2xl m-auto">
          {categories.map((category) => {
            return (
              <Link to={`/category/${category}`} className="p-4 md:w-1/3">
                {/* <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {category}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a className="mt-3 text-blue-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div> */}
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <a href="#!">
                    <img
                      class="rounded-t-lg max-h-56 w-full object-cover"
                      src={`/${category}.jpeg`}
                      alt=""
                    />
                  </a>
                  <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                      {category}
                    </h5>
                    <p class="mb-4 text-base text-neutral-600">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="mt-3 text-blue-500 inline-flex items-center">
                      Shop Now
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;

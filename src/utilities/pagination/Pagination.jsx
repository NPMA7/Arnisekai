"use client";

export const Pagination = ({ api, page, setPage }) => {

  return (
    <section className="text-gray-400 w-full">
      <div className="flex gap-4 pt-5 justify-center items-center">
        {page > 1 && (
          <>
            <button
              onClick={() => setPage(1)}
              className="hover:bg-blue-700 transition duration-300 ease-in-out py-2 px-4"
            >
              First Page
            </button>
            <button
              onClick={() => setPage(api.pagination?.previous_page)}
              className="hover:bg-blue-700 transition duration-300 ease-in-out py-2 px-4"
            >
              Prev
            </button>
          </>
        )}
        <span className="bg-blue-600 py-2 px-4">{page}</span>
        {page < api.pagination?.last_visible_page && (
          <>
          
            <button
              onClick={() => setPage(api.pagination?.next_page)}
              className="hover:bg-blue-700 transition duration-300 ease-in-out py-2 px-4"
            >
              Next
            </button>
            <button
              onClick={() => setPage(api.pagination?.last_visible_page)}
              // onClick={() => navigatePage(api.pagination?.last_visible_page)}
              className="hover:bg-blue-700 transition duration-300 ease-in-out py-2 px-4"
            >
              Last Page
            </button>
          </>
        )}
      </div>
    </section>
  );
};





export const PaginationAnime = ({ api, page, setPage }) => {
  const FirstPage = () => {
    setPage(1);
  };

  const PreviousPage = () => {
    setPage(api.pagination?.previous_page);
  };

  const NextPage = () => {
    setPage(api.pagination?.next_page);
  };
  const LastPage = () => {
    setPage(api.pagination?.last_visible_page);
  };

  return (
    <div className="text-gray-400">
      <div className="flex gap-8 pt-20 w-full justify-center">
        <button onClick={FirstPage} className="hover:bg-blue-700 transition-all  py-1 px-3">First Page</button>
        <button onClick={PreviousPage} className="hover:bg-blue-700 transition-all  py-1 px-3">{api.pagination?.has_previous_page}Prev</button>
        <button className="transition-all bg-blue-600 py-1 px-3">{page}</button>
        <button onClick={NextPage} className="hover:bg-blue-700 transition-all  py-1 px-3">{api.pagination?.has_next_page}Next</button>
        <button onClick={LastPage} className="hover:bg-blue-700 transition-all  py-1 px-3">{api.pagination?.has_last_visible_page}Last Page</button>
      </div>
    </div>
  );
};

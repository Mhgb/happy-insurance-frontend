function Pagination({ totalPages, updateCurrentPage }) {
  let pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => (
        <button key={index} onClick={() => updateCurrentPage(page)}>
          {page + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

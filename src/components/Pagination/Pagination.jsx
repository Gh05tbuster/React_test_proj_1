import style from "./Pagination.module.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const maximumPages = 6;

  function checkPage(page) {
    switch (currentPage) {
      case 1:
        if (page <= currentPage + 4) return true;
        break;
      case 2:
        if (page >= currentPage - 1 && page <= currentPage + 3) return true;
        break;
      case totalPages - 1:
        if (page >= currentPage - 3 && page <= currentPage + 1) return true;
        break;
      case totalPages:
        if (page >= currentPage - 4) return true;
        break;
      default:
        if (page >= currentPage - 2 && page <= currentPage + 2) return true;
        else return false;
    }
  }

  const nextPage = () => {
    if (currentPage + 1 <= totalPages) onPageChange(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage - 1 > 0) onPageChange(currentPage - 1);
  };

  const goToPage = (page) => {
    onPageChange(page);
  };

  return (
    <div className={style.pagination}>
      <div
        onClick={prevPage}
        disabled={currentPage === 1}
        className={style.arrow}
      >
        ◄
      </div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => {
          if (totalPages <= maximumPages)
            return (
              <div
                key={page}
                onClick={() => goToPage(page)}
                disabled={currentPage === page}
                className={`${style.el} ${
                  currentPage === page ? style.active : ""
                }`}
              >
                {page}
              </div>
            );
          else
            return checkPage(page) ? (
              <div
                key={page}
                onClick={() => goToPage(page)}
                disabled={currentPage === page}
                className={`${style.el} ${
                  currentPage === page ? style.active : ""
                }`}
              >
                {page}
              </div>
            ) : null;
        }
      )}
      <div
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={style.arrow}
      >
        ►
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    return (
        <div className="flex justify-center items-center space-x-4 mt-6">
            <button 
                onClick={() => handleClick(currentPage - 1)} 
                disabled={currentPage === 1}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            >
                Previous
            </button>
            <span className="text-lg font-semibold">
                Page {currentPage} of {totalPages}
            </span>
            <button 
                onClick={() => handleClick(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;

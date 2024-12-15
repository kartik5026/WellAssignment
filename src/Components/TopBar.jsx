function TopBar({ searchTerm, setSearchTerm, categories, currentCategory, setCurrentCategory, onSearch }) {
    return (
        <div className="bg-white p-6 shadow-lg flex justify-between items-center">
            <div className="flex space-x-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="px-6 py-2 text-lg border border-indigo-500 rounded-md w-1/2 max-w-xs bg-indigo-50"
                />
                <button onClick={() => onSearch(searchTerm)} className="px-6 py-2 text-lg text-white bg-indigo-500 rounded-md">
                    Search
                </button>
            </div>
            <select
                onChange={(e) => setCurrentCategory(e.target.value)}
                value={currentCategory}
                className="px-6 py-2 text-lg border border-indigo-500 rounded-md shadow-lg w-1/3 max-w-xs bg-indigo-50"
            >
                {categories.map((item, index) => (
                    <option key={index} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default TopBar;

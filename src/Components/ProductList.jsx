import React, { useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

function ProductList({ products, onProductClick }) {
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("asc");

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.product_name.localeCompare(b.product_name);
        } else {
            return b.product_name.localeCompare(a.product_name);
        }
    });
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            {paginatedProducts.map((product, index) => (
                <ProductCard key={startIndex + index} product={product} onClick={onProductClick} />
            ))}
            <Pagination 
                currentPage={currentPage} 
                totalItems={products.length} 
                itemsPerPage={itemsPerPage} 
                onPageChange={handlePageChange} 
            />
        </>
    );
}

export default ProductList;

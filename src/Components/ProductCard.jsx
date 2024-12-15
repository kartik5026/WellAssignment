function ProductCard({ product, onClick }) {
    return (
        <div className="p-6 border-2 border-gray-200 rounded-lg shadow-lg bg-white text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 truncate">{product.product_name || "No name available"}</h2>
            {product.image_front_small_url && (
                <img
                    src={product.image_front_small_url}
                    alt={product.product_name}
                    className="mb-4 max-h-48 mx-auto object-contain rounded-lg shadow-md"
                />
            )}
            <button onClick={() => onClick(product.id)} className="bg-green-400 py-2 px-4 rounded-md">
                Get Details
            </button>
            <p className="mb-2 text-lg text-gray-700">
                <strong>Category:</strong> {product.categories || "Not Available"}
            </p>
            {product.ingredients_text ? (
                <p className="mb-2 text-lg text-gray-700 break-words">
                    <strong>Ingredients:</strong> {product.ingredients_text}
                </p>
            ) : (
                <p className="mb-2 text-lg text-gray-700 break-words">
                    <strong>Ingredients:</strong> Not Available
                </p>
            )}
            {product.nutrition_grades ? (
                <p className="text-lg text-gray-700">
                    <strong>Nutrition Grade:</strong> {product.nutrition_grades}
                </p>
            ) : (
                <p className="text-lg text-gray-700">
                    <strong>Nutrition Grade:</strong> Not Available
                </p>
            )}
        </div>
    );
}

export default ProductCard;

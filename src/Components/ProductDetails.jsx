function ProductDetails({ product, onBack }) {
    return (
        <div className="w-full p-8">
            <button onClick={onBack} className="mb-4 text-indigo-500 underline">
                Back to Products
            </button>
            <h1 className="text-3xl font-bold mb-6">{product.product_name}</h1>
            {product.image_url && <img src={product.image_url} alt={product.product_name} className="mb-6" />}
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <p>{product.ingredients_text || "Not available"}</p>
            <h2 className="text-xl font-semibold mb-4">Nutritional Values</h2>
            {product.nutriments ? (
                <div>
                    <p><strong>Energy:</strong> {product.nutriments.energy_kcal} kcal</p>
                    <p><strong>Fat:</strong> {product.nutriments.fat} g</p>
                    <p><strong>Carbs:</strong> {product.nutriments.carbohydrates} g</p>
                    <p><strong>Proteins:</strong> {product.nutriments.proteins} g</p>
                    <p><strong>Labels:</strong> {product.labels}</p>
                </div>
            ) : (
                <p>No nutritional values available</p>
            )}
        </div>
    );
}

export default ProductDetails;

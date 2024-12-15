import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../Components/TopBar";
import ProductList from "../Components/ProductList";
import ProductDetails from "../Components/ProductDetails";

function Home() {
    const [currentCategory, setCurrentCategory] = useState("Plant-based foods and beverages");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        if (currentCategory) {
            getValuesForCurrentCategory(currentCategory);
        }
    }, [currentCategory]);

    async function getCategories() {
        try {
            const res = await axios.get("https://world.openfoodfacts.org/categories.json");
            setCategories(res.data.tags.slice(0, 10));
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    async function searchProducts(name) {
        setLoading(true);
        try {
            const res = await axios.get(
                `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&json=true`
            );
            setDisplayProducts(res.data.products || []);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setLoading(false);
        }
    }

    async function getValuesForCurrentCategory(val) {
        setLoading(true);
        try {
            const res = await axios.get(`https://world.openfoodfacts.org/category/${val}.json`);
            setDisplayProducts(res.data.products || []);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }

    async function getProductDetails(productId) {
        setLoading(true);
        try {
            const res = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${productId}.json`);
            setSelectedProduct(res.data.product);
        } catch (error) {
            console.error("Error fetching product details:", error);
        } finally {
            setLoading(false);
        }
    }
    if(loading){
        return(
            <div className="text-center p-6 text-2xl text-gray-600">Loading...</div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <TopBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                onSearch={searchProducts}
            />
            <div className="flex flex-wrap justify-start gap-y-8 w-full p-8">
                
                {selectedProduct ? (
                    <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />
                ) : (
                    <ProductList products={displayProducts} onProductClick={getProductDetails} />
                )}
            </div>
        </div>
    );
}

export default Home;

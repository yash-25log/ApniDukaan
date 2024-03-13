import {useEffect, useState} from 'react';
import { useParams } from "react-router";

function ProductDetailPage() {
    const [products, setProducts] = useState();
    const { id } = useParams();
    useEffect(() => {
        console.log('fetching products');
        fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(res=>setProducts(res))
    }, [id])
    
    // console.log(id);
    return (
        <div className="container mx-auto py-12">
            {
                products 
                ?
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <img src={products.image} alt={products.title} className="w-full h-auto object-cover rounded-md mb-4" />
                <h2 className="text-3xl font-bold mb-2">{products.title}</h2>
                <p className="text-gray-600 mb-4">{products.description}</p>
                <p className="text-gray-800 font-bold mb-2">{products.price}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Add to Cart
                </button>
            </div> : <p>Loading...</p>
            }
        </div>
    );
}


export default ProductDetailPage;

// import React from 'react';
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
// import { products } from '../constants/products';

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    console.log('fetching products');
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=>setProducts(res))
  }, [])
  
  return (
    <div className="container mx-auto py-12">
        
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products && products.map((product) => ( // very common error - only if products are fetched from api the map would work
        <Link to={`/ProductDetailPage/${product.id}`} key={product.id} >
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain rounded-md mb-4 " />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            {/* <p className="text-gray-600 mb-2">{product.description}</p> */}
            <p className="text-gray-800 font-bold">{product.price}</p>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    
  );
};

export default Products;

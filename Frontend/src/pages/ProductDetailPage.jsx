import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const addToCart = () => {
    // Implement your addToCart logic here
    console.log('Product added to cart:', product);
  };

  return (
    <div className="container mx-auto py-12">
      {product ? (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-800 font-bold mb-4">${product.price}</p>
              <button
                onClick={addToCart}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default ProductDetailPage;

// import React from 'react';

function CartPage() {
  return (
    <div className="max-h-full max-w-full">
      <div className="m-5 h-10vh w-90vw border p-10 justify-between flex">
        <h1 className="font-bold text-3xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl"> 3 Items</h2> 
      </div>

      <div className="flex justify-around">
        <div className="ml-20 p-5 w-96">
          <div className="border">
            <div className="h-60vh w-50vw flex p-5">
              <div className="h-20 w-20 flex-shrink-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-between pl-5">
                <div>
                  <h2 className="font-semibold">Basic Tee</h2>
                  <h2 className="text-gray-500">Sienna | Large</h2>
                  <h2 className="font-semibold">$32.00</h2>
                </div>
                <div className="flex items-center mt-2">
                  <button className="border px-2"> - </button>
                  <button className="px-2"> 1 </button>
                  <button className="border px-2"> + </button>
                  <button className="ml-4 text-red-500">Remove</button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-60vh w-50vw border flex p-5 mt-5">
            <div className="h-20 w-20 flex-shrink-0">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-between pl-5">
              <div>
                <h2 className="font-semibold">Basic Tee</h2>
                <h2 className="text-gray-500">Black | Large</h2>
                <h2 className="font-semibold">$31.00</h2>
              </div>
              <div className="flex items-center mt-2">
                <button className="border px-2"> - </button>
                <button className="px-2"> 1 </button>
                <button className="border px-2"> + </button>
                <button className="ml-4 text-red-500">Remove</button>
              </div>
            </div>
          </div>

          <div className="h-60vh w-50vw border flex p-5 mt-5">
            <div className="h-20 w-20 flex-shrink-0">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-between pl-5">
              <div>
                <h2 className="font-semibold">Nomad Tumblr</h2>
                <h2 className="text-gray-500">White</h2>
                <h2 className="font-semibold">$35.00</h2>
              </div>
              <div className="flex items-center mt-2">
                <button className="border px-2"> - </button>
                <button className="px-2"> 1 </button>
                <button className="border px-2"> + </button>
                <button className="ml-4 text-red-500">Remove</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mr-20 border p-5 w-64 mt-5">
          <h2 className="font-bold">Order Summary</h2>
          <div className="mt-4">
            <div className="flex justify-between">
              <h2>Subtotal</h2>
              <h2>$98.00</h2>
            </div>
            <div className="flex justify-between mt-2">
              <h2>Shipping</h2>
              <h2>$10.00</h2>
            </div>
            <div className="flex justify-between mt-2">
              <h2>Tax</h2>
              <h2>$8.00</h2>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <h2>Order Total</h2>
              <h2>$116.00</h2>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

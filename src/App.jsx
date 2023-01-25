import imgProductDes from './images/image-product-desktop.jpg';
import imgProductMob from './images/image-product-mobile.jpg';
import addToCart from './images/icon-cart.svg';
import { useLayoutEffect, useState } from 'react';

/*

  Preview

  Gabrielle Essence Eau De Parfum

  A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.

  $149.99
  $169.99

  Add to Cart

*/
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function App() {
  const [width, height] = useWindowSize();

  return (
    <div className="font-Mon w-full h-screen flex items-center justify-center bg-red-100">
      <div className="max-w-xs sm:flex sm:max-w-xl bg-white rounded-lg overflow-hidden">
        <div className="w-full sm:w-2/4" >
        <img className="max-w-full h-full" src={`${width <= 640 ? imgProductMob : imgProductDes}`} alt="Product" />
        </div>
        <div className="sm:w-2/4 p-6">
          <div className="text-gray-500 tracking-widest">Preview</div>
          <h1 className="font-Fra font-bold text-3xl ms:text-4xl my-3">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-gray-500">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='flex items-center gap-2.5 my-3'>
            <h2 className='font-Fra text-3xl text-green-700'>$149.99</h2>
            <span className='line-through text-gray-500'>$169.99</span>
          </div>
          <button className='bg-green-700 hover:bg-green-900 text-white w-full rounded-lg flex items-center justify-center gap-2.5 py-2'>
            <img src={addToCart} alt="cart-icon" /> 
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

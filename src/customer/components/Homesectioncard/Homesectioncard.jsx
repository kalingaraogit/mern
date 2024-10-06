import React from 'react';
import Button from '@mui/material/Button';


const Homesectioncard = ({ product = {} }) => {
  const { imageUrl, title, brand, pad } = product;

  const handleClick = () => {
    if (pad) {
      window.open(pad, "_blank");
    }
  };

  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border'>
      <div className='h-[13rem] w-[10rem]'>
        {imageUrl ? (
          <img className='object-cover object-top w-full h-full' src={imageUrl} alt={title || 'Product'} />
        ) : (
          <div className='bg-gray-200 w-full h-full flex items-center justify-center'>
            <span>No Image</span>
          </div>
        )}
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{brand || 'Unknown Brand'}</h3>
        <p className='mt-2 text-sm text-gray-500'>{title || 'No Title'}</p>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleClick} 
          style={{ marginTop: '1rem' }}
          disabled={!pad}
        >
          Buy
        </Button>  
      </div>
    </div>
  );
}
export default Homesectioncard 
import React from 'react';

const RelatedItem = ({ url, title, weight, price }) => {
    return (
        <div className='flex related-items-container'>
            <div>
                <img src={url} alt="" className='related-items-img' />
            </div>
            <div className='related-items-content flex'>
                <h1 className='related-items-content-title'>{title}</h1>
                <p className='related-items-content-weight'>{weight}</p>
                <p className='related-items-content-price'>{price}</p>
            </div>

            <div className='related-items-cart-icon flex items-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8 4.8H7.2V1.2C7.2 0.54 6.66 0 6 0C5.34 0 4.8 0.54 4.8 1.2V4.8H1.2C0.54 4.8 0 5.34 0 6C0 6.66 0.54 7.2 1.2 7.2H4.8V10.8C4.8 11.46 5.34 12 6 12C6.66 12 7.2 11.46 7.2 10.8V7.2H10.8C11.46 7.2 12 6.66 12 6C12 5.34 11.46 4.8 10.8 4.8Z" fill="#F3F3EF" />
                </svg>
            </div>
        </div>
    );
};

export default RelatedItem;
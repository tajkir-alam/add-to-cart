import React from 'react';

const RelatedProducts = () => {
    return (
        <section className='related-products-section'>
            <div className='related-products-title-container flex items-center'>
                <h4 className='related-products-title'>Related Products</h4>
                <div className='slider-btn flex items-center'>
                    <span className='arrow-left'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.16 7.41L10.58 12L15.16 16.59L13.75 18L7.75003 12L13.75 6L15.16 7.41Z" fill="#C4CDD5" />
                        </svg>
                    </span>
                    <span className='arrow-right'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.83997 7.41L13.42 12L8.83997 16.59L10.25 18L16.25 12L10.25 6L8.83997 7.41Z" fill="#C4CDD5" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className='card-container'>
                
            </div>
        </section>
    );
};

export default RelatedProducts;
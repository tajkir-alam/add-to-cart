import React from 'react';

const Product = () => {
    return (
        <section className='product-section'>
            {/* For Large Device */}
            <p className='path flex items-center sm-d-none'>
                Home
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1.0575 0.5L0 1.5575L3.435 5L0 8.4425L1.0575 9.5L5.5575 5L1.0575 0.5Z" fill="#1A202C" />
                </svg>
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1.0575 0.5L0 1.5575L3.435 5L0 8.4425L1.0575 9.5L5.5575 5L1.0575 0.5Z" fill="#1A202C" />
                </svg>
                Chicken
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1.0575 0.5L0 1.5575L3.435 5L0 8.4425L1.0575 9.5L5.5575 5L1.0575 0.5Z" fill="#1A202C" />
                </svg>
                <span className="current-path">
                    Broiler Chicken Drumstick (± 50gm) 1kg
                </span>
            </p>
            {/* For Small Device */}
            <p className='path flex items-center lg-d-none'>
                Home
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1.0575 0.5L0 1.5575L3.435 5L0 8.4425L1.0575 9.5L5.5575 5L1.0575 0.5Z" fill="#1A202C" />
                </svg>
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1.0575 0.5L0 1.5575L3.435 5L0 8.4425L1.0575 9.5L5.5575 5L1.0575 0.5Z" fill="#1A202C" />
                </svg>
                <span className="current-path">
                    Chicken Drumstick
                </span>
            </p>

            <div className='flex items-center product'>
                <div className='product-img' >
                    <img src="/productImg.png" alt="" />

                    {/* for top left discount content */}
                    <div className="discountImg-container">
                        <span className='discountImg-content'>
                            <img src="/discount.png" alt="" />
                            <span className="discountImg-text">
                                10% OFF
                            </span>
                        </span>
                    </div>

                    {/* fot bottom right sale content */}
                    <div className="saleImg-container">
                        <span className='sale-img-vector'>
                            <img src="/saleImgBg.png" alt="" />
                        </span>
                        <span className='dash-top'>
                            <img src="/dashTop.png" alt="" />
                        </span>
                        <span className='dash-bottom'>
                            <img src="/dashBottom.png" alt="" />
                        </span>
                        <span className='sale-text'>
                            <span className='super-text'>&nbsp; SUPER </span> SALE
                        </span>
                        <span className='sale-exclamation'>
                            <span className='exclamation-symbol'>!</span>!
                        </span>
                        <span>
                            <img src="/saleImgBgShadow.png" alt="" />
                        </span>

                    </div>
                </div>
                <div>

                </div>
                <div className='sm-d-none'>

                </div>
            </div>
        </section>
    );
};

export default Product;
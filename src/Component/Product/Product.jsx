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

            <div className='product'>
                <div className='product-img' >
                    <img src="/productImg.png" alt="" className='productImg' />

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
                        <div className="saleImg-content">
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
                </div>

                <div className='product-info'>
                    <h1 className='product-title'>
                        Broiler Chicken Drumsticks (± 50gm) 1kg
                    </h1>
                    <mark className='product-badge'>
                        80G PLASTIC
                    </mark>
                    <p className='price flex items-center'>
                        ৳ 130.00
                        <s className='strikethrough-text'>৳ 150.00</s>
                    </p>
                    <div className='flex product-short-info'>
                        <div className='short-info-title-container'>
                            <p className='short-info-title'>Stock</p>
                            <p className='short-info-title'>SKU</p>
                            <p className='short-info-title'>Categories</p>
                        </div>
                        <div className='short-info-details-container'>
                            <p className='short-info-details-container-child-1'>In Stock</p>
                            <p className='short-info-details-container-child-2'>B42312</p>
                            <p className='short-info-details-container-child-3 flex items-center'>
                                <span>CLEANING SUPPLIES </span>
                                <span>FLOOR & GLASS CLEANERS OFFER</span>
                                <span>BOGO</span>
                            </p>
                        </div>
                    </div>
                    <p className='product-tagline'>Achieve a sparkling clean and hugenic toilet with Shakti Toilet Cleaner.</p>
                    <div className='flex items-center product-interaction'>
                        <button className='cart-btn flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.34998 22.05C7.34998 20.8902 8.29018 19.95 9.44998 19.95C10.6098 19.95 11.55 20.8902 11.55 22.05C11.55 23.2097 10.6098 24.15 9.44998 24.15C8.29018 24.15 7.34998 23.2097 7.34998 22.05Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9 22.05C18.9 20.8902 19.8402 19.95 21 19.95C22.1598 19.95 23.1 20.8902 23.1 22.05C23.1 23.2097 22.1598 24.15 21 24.15C19.8402 24.15 18.9 23.2097 18.9 22.05Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.05C0 0.470101 0.470101 0 1.05 0H5.25C5.75046 0 6.18136 0.353205 6.27958 0.84393L7.16145 5.25H24.15C24.4629 5.25 24.7595 5.38957 24.959 5.63068C25.1585 5.87179 25.24 6.18931 25.1814 6.49669L23.4999 15.3141C23.3559 16.0392 22.9614 16.6905 22.3855 17.1541C21.8125 17.6154 21.0962 17.8615 20.3609 17.85H10.1731C9.43779 17.8615 8.72151 17.6154 8.1485 17.1541C7.57286 16.6907 7.17847 16.0397 7.0343 15.3149C7.03424 15.3147 7.03435 15.3152 7.0343 15.3149L5.28023 6.55116C5.27311 6.52217 5.2672 6.49271 5.26255 6.46283L4.38933 2.1H1.05C0.470101 2.1 0 1.6299 0 1.05ZM7.58177 7.35L9.09388 14.9049C9.14189 15.1467 9.27338 15.3638 9.46534 15.5183C9.6573 15.6728 9.8975 15.7549 10.1439 15.7502L10.164 15.75H20.37L20.3901 15.7502C20.6365 15.7549 20.8767 15.6728 21.0687 15.5183C21.2597 15.3645 21.3909 15.1487 21.4394 14.9083L22.8808 7.35H7.58177Z" fill="white" />
                            </svg>
                            Add To Cart
                        </button>
                    </div>
                </div>
                <div className='sm-d-none'>

                </div>
            </div>
        </section>
    );
};

export default Product;
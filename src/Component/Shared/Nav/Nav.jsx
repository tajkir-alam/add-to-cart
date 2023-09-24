import React from 'react';

const Nav = () => {
    return (
        <header>
            {/* Header Section */}
            <section className="header-section flex">
                <div className='header-content flex items-center'>
                    <p>Free shipping on order value more than BDT. 2000</p>
                    <p>Return Plastic to Get Reward Points</p>
                    <p>Get Same Day Delivery</p>
                    <p>Free shipping on order value more than BDT. 2000</p>
                    <p>Get Same Day Delivery</p>
                </div>
                <div className='header-menu'>
                    <ul className='flex'>
                        <li><a href="/">Find Us</a></li>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
            </section>

            {/* Nav Bar */}
            <nav className='container'>
                <div className='nav-container flex items-center'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                            <path d="M1.8 0.8C1.24772 0.8 0.8 1.24772 0.8 1.8C0.8 2.35228 1.24772 2.8 1.8 2.8H22.6C23.1523 2.8 23.6 2.35228 23.6 1.8C23.6 1.24772 23.1523 0.8 22.6 0.8H1.8ZM1.8 15.2C1.24772 15.2 0.8 15.6477 0.8 16.2C0.8 16.7523 1.24772 17.2 1.8 17.2H14.6C15.1523 17.2 15.6 16.7523 15.6 16.2C15.6 15.6477 15.1523 15.2 14.6 15.2H1.8ZM1.8 8C1.24772 8 0.8 8.44772 0.8 9C0.8 9.55229 1.24772 10 1.8 10H22.6C23.1523 10 23.6 9.55228 23.6 9C23.6 8.44772 23.1523 8 22.6 8H1.8Z" fill="#1D1D21" stroke="#333333" stroke-width="0.4" />
                        </svg>
                    </div>
                    <div>
                        <img src="/logo.png" alt="logo" className='logo' />
                    </div>
                    <div className='nav-menu d-none'>
                        <ul className='flex'>
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center'>
                                    Offers
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                        <path d="M12.6001 7.60004L11.6131 6.61304L8.4001 9.81904L5.1871 6.61304L4.2001 7.60004L8.4001 11.8L12.6001 7.60004Z" fill="black" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center'>
                                    BOGO
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                        <path d="M12.6001 7.60004L11.6131 6.61304L8.4001 9.81904L5.1871 6.61304L4.2001 7.60004L8.4001 11.8L12.6001 7.60004Z" fill="black" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center'>
                                    Plastic free
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                        <path d="M12.6001 7.60004L11.6131 6.61304L8.4001 9.81904L5.1871 6.61304L4.2001 7.60004L8.4001 11.8L12.6001 7.60004Z" fill="black" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
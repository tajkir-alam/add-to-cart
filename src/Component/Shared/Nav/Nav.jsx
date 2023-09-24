import React from 'react';

const Nav = () => {
    return (
        <header>
            {/* Header Section */}
            <section className="header-section flex justify-between">
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
                <div className='nav-container flex justify-between items-center'>
                    {/* Left Content */}
                    <div className='nav-left-content flex justify-between items-center'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                                <path d="M1.8 0.8C1.24772 0.8 0.8 1.24772 0.8 1.8C0.8 2.35228 1.24772 2.8 1.8 2.8H22.6C23.1523 2.8 23.6 2.35228 23.6 1.8C23.6 1.24772 23.1523 0.8 22.6 0.8H1.8ZM1.8 15.2C1.24772 15.2 0.8 15.6477 0.8 16.2C0.8 16.7523 1.24772 17.2 1.8 17.2H14.6C15.1523 17.2 15.6 16.7523 15.6 16.2C15.6 15.6477 15.1523 15.2 14.6 15.2H1.8ZM1.8 8C1.24772 8 0.8 8.44772 0.8 9C0.8 9.55229 1.24772 10 1.8 10H22.6C23.1523 10 23.6 9.55228 23.6 9C23.6 8.44772 23.1523 8 22.6 8H1.8Z" fill="#1D1D21" stroke="#333333" stroke-width="0.4" />
                            </svg>
                        </div>
                        <div>
                            <img src="/logo.png" alt="logo" className='logo' />
                        </div>
                        <div className='nav-menu sm-d-none'>
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
                    </div>

                    {/* Right Content */}
                    <div className='nav-right-content flex items-center'>
                        <div className='sm-d-none search'>
                            <input
                                type="text"
                                name=""
                                placeholder='I am searching for...'
                                className='menu-input'
                            />
                            <span className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.59995 2.40001C4.28036 2.40001 2.39995 4.28042 2.39995 6.60001C2.39995 8.91961 4.28036 10.8 6.59995 10.8C8.91955 10.8 10.8 8.91961 10.8 6.60001C10.8 4.28042 8.91955 2.40001 6.59995 2.40001ZM1.19995 6.60001C1.19995 3.61767 3.61761 1.20001 6.59995 1.20001C9.58229 1.20001 12 3.61767 12 6.60001C12 9.58235 9.58229 12 6.59995 12C3.61761 12 1.19995 9.58235 1.19995 6.60001Z" fill="#1D1D21" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.56563 9.56575C9.79994 9.33144 10.1798 9.33144 10.4142 9.56575L13.0242 12.1758C13.2585 12.4101 13.2585 12.79 13.0242 13.0243C12.7898 13.2586 12.4099 13.2586 12.1756 13.0243L9.56563 10.4143C9.33131 10.18 9.33131 9.80007 9.56563 9.56575Z" fill="#1D1D21" />
                                </svg>
                            </span>
                        </div>

                        <div className='fav-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.95076 2.48106C5.72869 2.15804 6.56273 1.99176 7.40506 1.99176C8.24739 1.99176 9.08144 2.15804 9.85937 2.48106C10.6373 2.80408 11.3438 3.27749 11.9384 3.87414L11.9417 3.87748L12.0001 3.93659L12.0584 3.87749L12.0617 3.87414C12.6563 3.27749 13.3628 2.80408 14.1408 2.48106C14.9187 2.15804 15.7527 1.99176 16.5951 1.99176C17.4374 1.99176 18.2714 2.15804 19.0494 2.48106C19.827 2.80397 20.5333 3.27717 21.1278 3.87353C23.6728 6.41922 23.7294 10.6284 20.7137 13.7005L20.7072 13.7072L12.7072 21.7071C12.5196 21.8947 12.2653 22 12.0001 22C11.7348 22 11.4805 21.8947 11.293 21.7071L3.2864 13.7006C0.270699 10.6284 0.327319 6.41921 2.87235 3.87352C3.4668 3.27716 4.1731 2.80397 4.95076 2.48106ZM7.40506 3.99176C6.82596 3.99176 6.25255 4.10608 5.71773 4.32815C5.1829 4.55023 4.69717 4.8757 4.2884 5.2859L4.28717 5.28713C2.59356 6.98074 2.38982 9.92928 4.71058 12.2963L12.0001 19.5858L19.2895 12.2963C21.6103 9.92929 21.4066 6.98074 19.713 5.28713L19.7117 5.2859C19.303 4.8757 18.8172 4.55023 18.2824 4.32815C17.7476 4.10608 17.1742 3.99176 16.5951 3.99176C16.016 3.99176 15.4426 4.10608 14.9077 4.32815C14.3736 4.54994 13.8884 4.87484 13.48 5.28428C13.4795 5.28482 13.4789 5.28536 13.4784 5.2859L12.7117 6.06255C12.5238 6.25288 12.2675 6.36002 12.0001 6.36002C11.7326 6.36002 11.4763 6.25288 11.2884 6.06255L10.5217 5.2859C10.5212 5.28536 10.5207 5.28482 10.5201 5.28428C10.1117 4.87484 9.62652 4.54994 9.0924 4.32815C8.55757 4.10608 7.98416 3.99176 7.40506 3.99176Z" fill="#1D1D21" />
                            </svg>
                            <span className='fav-icon-badge'>4</span>
                        </div>

                        <div className='divider'></div>

                        <div className='userImg'>
                            <img src="/user.png" alt="user-img" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
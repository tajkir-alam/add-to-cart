import React from 'react';

const Footer = () => {
    return (
        <footer>
            <section className="top-footer">
                <div className='col'>
                    <p className='footer-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p className='flex items-center hotline'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8V12.6667C2 13.4 2.6 14 3.33333 14H6V8.66667H3.33333V8C3.33333 5.42 5.42 3.33333 8 3.33333C10.58 3.33333 12.6667 5.42 12.6667 8V8.66667H10V14H12.6667C13.4 14 14 13.4 14 12.6667V8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2ZM4.66667 10V12.6667H3.33333V10H4.66667ZM12.6667 12.6667H11.3333V10H12.6667V12.6667Z" fill="#333333" />
                        </svg>
                        Hotline 24/7
                    </p>
                    <a href='tell:+8801624632302' className='contact-number'>(+880) 9643 3009 400</a>
                    <p className='flex contact-address'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59075 0.807119C7.83149 0.619876 8.16859 0.619876 8.40933 0.807119L14.4093 5.47378C14.5717 5.60009 14.6667 5.79429 14.6667 6.00002V13.3334C14.6667 13.8638 14.456 14.3725 14.0809 14.7476C13.7058 15.1226 13.1971 15.3334 12.6667 15.3334H3.33337C2.80294 15.3334 2.29423 15.1226 1.91916 14.7476C1.54409 14.3725 1.33337 13.8638 1.33337 13.3334V6.00002C1.33337 5.79429 1.42836 5.60009 1.59075 5.47378L7.59075 0.807119ZM2.66671 6.32608V13.3334C2.66671 13.5102 2.73695 13.6797 2.86197 13.8048C2.98699 13.9298 3.15656 14 3.33337 14H12.6667C12.8435 14 13.0131 13.9298 13.1381 13.8048C13.2631 13.6797 13.3334 13.5102 13.3334 13.3334V6.32608L8.00004 2.17793L2.66671 6.32608Z" fill="#333333" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33337 7.99998C5.33337 7.63179 5.63185 7.33331 6.00004 7.33331H10C10.3682 7.33331 10.6667 7.63179 10.6667 7.99998V14.6666C10.6667 15.0348 10.3682 15.3333 10 15.3333C9.63185 15.3333 9.33337 15.0348 9.33337 14.6666V8.66665H6.66671V14.6666C6.66671 15.0348 6.36823 15.3333 6.00004 15.3333C5.63185 15.3333 5.33337 15.0348 5.33337 14.6666V7.99998Z" fill="#333333" />
                        </svg>
                        House 91/C Rd 24 <br />
                        Dhaka 1212 Bangladesh
                    </p>
                    <a href='mailto:thinkcrypt.io' className='flex items-center contact-mail'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91911 3.25247C2.29418 2.8774 2.80289 2.66669 3.33332 2.66669H12.6667C13.1971 2.66669 13.7058 2.8774 14.0809 3.25247C14.4559 3.62755 14.6667 4.13625 14.6667 4.66669V5.32301C14.6667 5.3295 14.6667 5.33599 14.6667 5.34247V11.3334C14.6667 11.8638 14.4559 12.3725 14.0809 12.7476C13.7058 13.1226 13.1971 13.3334 12.6667 13.3334H3.33332C2.80289 13.3334 2.29418 13.1226 1.91911 12.7476C1.54404 12.3725 1.33332 11.8638 1.33332 11.3334V5.34247C1.33323 5.33599 1.33323 5.3295 1.33332 5.32301V4.66669C1.33332 4.13625 1.54404 3.62755 1.91911 3.25247ZM2.66666 6.57903V11.3334C2.66666 11.5102 2.73689 11.6797 2.86192 11.8048C2.98694 11.9298 3.15651 12 3.33332 12H12.6667C12.8435 12 13.013 11.9298 13.1381 11.8048C13.2631 11.6797 13.3333 11.5102 13.3333 11.3334V6.57903L9.10999 9.39459C9.10992 9.39463 9.10986 9.39468 9.10979 9.39472C8.78117 9.61391 8.395 9.73089 7.99999 9.73089C7.60497 9.73089 7.21881 9.61391 6.89019 9.39472C6.89012 9.39468 6.89006 9.39463 6.88999 9.39459L2.66666 6.57903ZM13.3333 4.97656L8.37019 8.28532L8.36999 8.28545C8.26044 8.35855 8.13169 8.39755 7.99999 8.39755C7.86829 8.39755 7.73954 8.35855 7.62999 8.28545L7.62979 8.28532L2.66666 4.97656V4.66669C2.66666 4.48988 2.73689 4.32031 2.86192 4.19528C2.98694 4.07026 3.15651 4.00002 3.33332 4.00002H12.6667C12.8435 4.00002 13.013 4.07026 13.1381 4.19528C13.2631 4.32031 13.3333 4.48988 13.3333 4.66669V4.97656Z" fill="#333333" />
                        </svg>
                        thinkcrypt@io
                    </a>
                </div>
                <div className='col'>
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Policy</a></li>
                        <li><a href="">Offer</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h3>Policy</h3>
                    <ul>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Return & Refund</a></li>
                        <li><a href="">Reward Redemption</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h3>Account</h3>
                    <ul>
                        <li><a href="">Sign In</a></li>
                        <li><a href="">View Cart</a></li>
                        <li><a href="">My Whitelist</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Install App</h3>
                    <p>Download Our App from App Store orGoogle Play Store</p>
                    <div className='flex items-center app-img'>
                        <img src="/appstore.png" alt="" />
                        <img src="/googleplay.png" alt="" />
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
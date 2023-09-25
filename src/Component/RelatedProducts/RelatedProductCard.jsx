import React, { useEffect, useRef, useState } from 'react';

const RelatedProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [showQuantity, setShowQuantity] = useState(false)
    const closeQuantity = useRef(null);

    // Quantity will disappear 
    useEffect(() => {
        document.addEventListener('click', handleCloseQuantity, true);
    }, [])
    
    const handleCloseQuantity = (e) => {
        if (!closeQuantity.current.contains(e.target)) {
            setShowQuantity(false);
        }
        else {
            setShowQuantity(true);
        }
    }
    
    const { img, badge, stock, name, sale, weight, price, sale_price } = product;

    return (
        <div className='card-container'>
            <div className='quantity-management'>
                <div className="quantity-container">
                    <button onClick={() => setShowQuantity(true)} className='quantity-btn flex items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M18 9C18.2984 9 18.5845 9.11853 18.7955 9.32951C19.0065 9.54048 19.125 9.82663 19.125 10.125V16.875H25.875C26.1734 16.875 26.4595 16.9935 26.6705 17.2045C26.8815 17.4155 27 17.7016 27 18C27 18.2984 26.8815 18.5845 26.6705 18.7955C26.4595 19.0065 26.1734 19.125 25.875 19.125H19.125V25.875C19.125 26.1734 19.0065 26.4595 18.7955 26.6705C18.5845 26.8815 18.2984 27 18 27C17.7016 27 17.4155 26.8815 17.2045 26.6705C16.9935 26.4595 16.875 26.1734 16.875 25.875V19.125H10.125C9.82663 19.125 9.54048 19.0065 9.32951 18.7955C9.11853 18.5845 9 18.2984 9 18C9 17.7016 9.11853 17.4155 9.32951 17.2045C9.54048 16.9935 9.82663 16.875 10.125 16.875H16.875V10.125C16.875 9.82663 16.9935 9.54048 17.2045 9.32951C17.4155 9.11853 17.7016 9 18 9Z" fill="white" />
                        </svg>
                    </button>
                    <div ref={closeQuantity} className={`quantity-adjustment ${showQuantity ? 'flex' : 'd-none'} items-center`}>
                        <button onClick={() => setQuantity(prev => prev - 1)} disabled={quantity <= 1} className="quantity-decrease cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                <path d="M8.09998 16.5H29.1V19.5H8.09998V16.5Z" fill={quantity > 1 ? "white" : "#a5bead"} />
                            </svg>
                        </button>
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity(prev => prev + 1)} className="quantity-increase cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M18 9C18.2984 9 18.5845 9.11853 18.7955 9.32951C19.0065 9.54048 19.125 9.82663 19.125 10.125V16.875H25.875C26.1734 16.875 26.4595 16.9935 26.6705 17.2045C26.8815 17.4155 27 17.7016 27 18C27 18.2984 26.8815 18.5845 26.6705 18.7955C26.4595 19.0065 26.1734 19.125 25.875 19.125H19.125V25.875C19.125 26.1734 19.0065 26.4595 18.7955 26.6705C18.5845 26.8815 18.2984 27 18 27C17.7016 27 17.4155 26.8815 17.2045 26.6705C16.9935 26.4595 16.875 26.1734 16.875 25.875V19.125H10.125C9.82663 19.125 9.54048 19.0065 9.32951 18.7955C9.11853 18.5845 9 18.2984 9 18C9 17.7016 9.11853 17.4155 9.32951 17.2045C9.54048 16.9935 9.82663 16.875 10.125 16.875H16.875V10.125C16.875 9.82663 16.9935 9.54048 17.2045 9.32951C17.4155 9.11853 17.7016 9 18 9Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <div className={`card-body flex ${!badge && !sale && 'no-badge_no-sale'} ${!badge && 'no-badge'} ${!sale && 'no-sale'}`}>
                {badge &&
                    <p className="card-badge flex">
                        <span>{badge}</span>
                    </p>
                }
                <p className='stock'>{stock}</p>
                <h4 className='card-title'>{name}</h4>
                {sale &&
                    <p className="sale flex">
                        <span >{sale}</span>
                    </p>
                }
                <p className="weight">{weight}</p>
                <div className='flex items-center card-price-container'>
                    <p className="card-item-price">{price}</p>
                    <p className="card-item-sale-price">{sale_price}</p>
                </div>
            </div>
        </div>
    );
};

export default RelatedProductCard;
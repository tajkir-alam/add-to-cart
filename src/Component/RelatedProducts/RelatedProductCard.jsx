import React from 'react';

const RelatedProductCard = ({ product }) => {
    const { img, badge, stock, name, sale, weight, price, sale_price } = product;
    
    return (
        <div className='card-container'>
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
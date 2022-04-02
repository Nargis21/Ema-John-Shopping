import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, price, img, quantity } = product
    return (
        <div className='review-items-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-items-details">
                <div className="items-info">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: <span>${price}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
                </div>
                <div>
                    <button onClick={() => handleRemoveProduct(product)} className="delete-btn">
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
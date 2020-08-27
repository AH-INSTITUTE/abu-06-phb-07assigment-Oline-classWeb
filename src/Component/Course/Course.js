import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Course = (props) => {
    //console.log(props);
    const starIcon = <FontAwesomeIcon icon={faStar} />
    const shopingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const { title, img, instructor, soldout, price, sellertitle } = props.course123;
    return (
        <div className="col-md-4 my-3">
            <div id="course-info-wrapper" className="">
                <div className="course-img py-2">
                    <img src={img} alt="" />
                </div>
                <div className="course-text-info py-1">
                    <h3 className="">{title}</h3>
                    <small>Course By : {instructor}</small>
                    <span className="course-rating">4.6 {starIcon} {starIcon} {starIcon} {starIcon} {starIcon} Sold Out ({soldout})</span>
                    <div className="d-flex justify-content-between align-items-center">
                        <s className="course-price">Price : $</s>
                        <span className="course-price">Price : ${price}</span>  
                    </div>
                    <span className="couser-seller-rating">{sellertitle}</span>
                    <br />
                    <button type="text" onClick={() => {
                        return props.buyNowBtn(props.course123);
                    }}>{shopingCart} Enroll Now</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Course;
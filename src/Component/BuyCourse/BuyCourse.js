import React from 'react';
import './BuyCourse.css'
const BuyCourse = (props) => {
    const { img, title, price, instructor, phone, sellertitle,email } = props.p;
    return (
        <div>
            <div className="buyCourseInfo">
                <div className="buyCourseImg">
                    <img src={img} alt="" className="" />
                </div>
                <div className="buyCourseText">
                    <h3 className="pt-3">{title}</h3>
                    <span>Course By {instructor}</span>
                    <span>Price : ${price}</span>
                    <span>Phone : {phone}</span>
                    <span>Email : {email}</span>
                    <span>Seller Rating : {sellertitle}</span>
                </div>
            </div>
        </div>
    );
};

export default BuyCourse;
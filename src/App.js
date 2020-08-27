import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Course from './Component/Course/Course';

import onlineClassData from './OnlineClassData';
import BuyCourse from './Component/BuyCourse/BuyCourse';

function App() {
  //Course Data Show
  const first12 = onlineClassData.splice(0, 12);
  const [onlineClass] = useState(first12);

  //Buy Now button
  const [course, setCourse] = useState([])

  const buyNowBtn = (courseItem) => {
    const newCourse = [...course, courseItem]
    setCourse(newCourse);
    
  }
  //get total price of courseItem
  const totalPrice = course.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="App">
      <div className="header-sec">
        <Header />
      </div>
      <div className="course-wrapper container mb-5">
        <div className="row">
          <div className="course-section col-md-9">
            <div className="row">
              {
                onlineClass.map(p => <Course key={p.id} course123={p} buyNowBtn={buyNowBtn} />)
              }
            </div>
          </div>
          <div className="buy-couser-section col-md-3">
            <div className="row pt-3 pl-2">
              <h3 className="text-center">Course Seleted : {course.length} </h3>
              <div id="add-tot-cart" className="">
                <button className="btn btn-success my-3 float-left" type="">Add To Cart</button>
                <div className="d-block d-flex flex-column">
                  <del className="pl-3">Pay ${totalPrice}</del>
                  <strong className="pl-3">Pay ${totalPrice}</strong>
                </div>
              </div>
              {
                course.map(p => <BuyCourse p={p} key={p.id} />)
              }
              <button id="tottalPriceBtn" type="button" className="btn btn-danger btn-block">Total Course Price : ${totalPrice}</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

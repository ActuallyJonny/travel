import React, {usest} from 'react'
import ReactStars from "react-rating-stars-component";
import "./Review.css"
import { useStateValue } from "./StateProvider.js";
import {useAlert} from "react-alert";


function Review({hotel1, hotel1ID}){
    const hotel = hotel1;
    const hotelID = hotel1ID;
    console.log(hotel.userName,hotelID)
    const [{user},dispatch] = useStateValue();
    const http = require('follow-redirects').http;
    const _ = require('lodash')
    const alert = useAlert();
    const options = {
        'method': 'POST',
        'hostname': 'localhost',
        'port': 5000,
        'path': '/hotel/review/del',
        'headers': {
            'Content-Type': 'application/json'
        },
        'maxRedirects': 20
    }; 

    

    const req = http.request(options, function (res) {
        const chunks = [];
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            const body = Buffer.concat(chunks);
            if (res.statusCode!==200){
                alert.show(_.lowerCase(body.toString()))
            }
            else{
                alert.show("Review deleted successfully!")
            }
        });
    });
    const deleteReview = () => {
    const postData = JSON.stringify({"hotelId":hotelID, "userId":user.id})
    console.log(hotelID)
    console.log(postData)
    req.write(postData)
    req.end()
    }

    const rating = parseInt(hotel.rating)
    const userRating = {
        size: 20,
        value: rating,
        edit: false
      };
    
      if (user!==null && user.id===hotel.userId){
          return(
            <div className = 'review'>
            <ReactStars {...userRating}></ReactStars>
            <div>
            <p className="review__text_1">{hotel.review}</p> <button onClick={deleteReview} className="delete__review"><i class="fas fa-trash-alt"></i></button>
            <p className="name"><em> -{hotel.userName}</em></p>
            </div>
          </div>
          )
      }
    return (
    <div className = 'review'>
    <ReactStars {...userRating}></ReactStars>
    <div>
    <p>{hotel.review}</p>
    <p className="name"><em> -{hotel.userName}</em></p>
    </div>
  </div>
    )
}


export default Review

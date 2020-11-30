import React, {useState} from 'react';
import './HotelResult.css';
import { useHistory } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useStateValue} from "./StateProvider.js";
import { useAlert } from 'react-alert';
//Total is price * size of date range
function HotelResult(
  {img, address, name, desc, rating, price, id, hotelid}
) {
  const hotelID = hotelid;
  const roomID = id;
  const [{user}, dispatch] = useStateValue();
  const[today, setToday] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const http = require('follow-redirects').http;
  const _ = require('lodash')
  const alert = useAlert();
  const history = useHistory();
  const options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': 5000,
    'path': '/booking/add',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
}; 



const req = http.request(options, function (res) {
    const chunks = [];
    res.on("data", function (chunk) {
        chunks.push(chunk);
        console.log(chunk)
    });

    res.on("end", function () {
        const body = Buffer.concat(chunks);
        const bodyString = JSON.parse(body)
        console.log(bodyString)
        const userID = bodyString.message?bodyString.message._id:null
        console.log(userID);
        if (res.statusCode!==200){
            alert.show(_.lowerCase(body.toString()))
        }
        else{
            alert.show("You have been logged in!")
        }
    });
});
  const handleSubmit =(e)=>{
    e.preventDefault()
    if (user===null){
      history.push("/login")
      return
    }
    const postData = JSON.stringify({"hotelId":hotelID,"userId":user.id,"room":id, "dates":[startDate,endDate] });
  }
  console.log("ROOM ID>>", id)
  const onChange = dates => {
    console.log(dates);
    setStartDate(dates[0]);
    setEndDate(dates[1])
    setToday( new Date());
    // console.log(date.getFullYear(),date.getMonth(),date.getDay(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds())
  }
  console.log(startDate,endDate)
  return (
    <div className = 'hotelresult'>

      <img src = {img} alt = "" />

      <div className = 'hotelresult-info'>
          <div className = 'info-top'>
            <p>{address}</p>
            <h3><strong>{name}</strong></h3>
            <p>_____</p>
            <p>{desc}</p>
          </div>

          <div className = 'info-bottom'>

            <div className = 'hotelresult-rating'>
            {
                        Array(Math.floor(rating))
                        .fill()
                        .map(()=> (
                          <StarIcon className = 'hotelresult-star' />
                        ))
            }
              <p><strong>{rating}</strong></p>
            </div>

            <div className = 'hotelresult-price'>
              <div className = 'hotelresult-book'>
                <Button onClick = {handleSubmit}>
                  <h3><strong>Book Now</strong></h3>
                  </Button>
                  <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                  />
              </div>
              <h2>₹{price}/night</h2>
            </div>
          </div>



      </div>

    </div>
  )
}


export default HotelResult

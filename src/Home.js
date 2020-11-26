import React, {useState} from "react"
import './Home.css'
import Banner from "./Components/Banner.js"
import Card from "./Components/Card.js"
import {Router, Link} from "react-router-dom";
import { useAlert } from 'react-alert'

function Home() {
  const http = require('follow-redirects').http;
    const _ = require('lodash')
    const alert = useAlert();
    const options = {
        'method': 'POST',
        'hostname': 'localhost',
        'port': 5000,
        'path': 'hotel/card/1',
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

        res.on("end", function (chunk) {
            const body = Buffer.concat(chunks);
            const bodyString = body.toString()
            console.log(bodyString);
        });
    });

    const initialID = Object.freeze({
        id: ""
      });
    const [formData,setID] = useState(initialID)
    
    const handleSubmit = (e) => {
        setID({...formData, [e.target.name]:e.target.value})
        console.log(formData)
        const postData = JSON.stringify({"id":formData.id});

        req.write(postData);

        req.end();
    }
  return  (
    <div className = 'home'>
      <Banner />
      <div id="1" onClick= {handleSubmit} className = 'home-cards'>
        <Card
          src = "https://s3.amazonaws.com/luxe-prod-website/images/Panor-glam-a__Seven_swank_rooms_w.2e16d0ba.fill-1200x600.jpg"
          title = "Penthouse in Dubai"
          desc = "Enjoy the luxurious Dubai skyline in a room with a view."
          price = "₹4,677/night"
        />
        <Card
          src = "https://bstatic.com/xdata/images/xphoto/1182x887/63486802.jpg?k=6140686925115e16214dd4a6b7ccfdc268e0ea1b38eb7a769ed593fb5bd6f2a2&o=?size=S"
          title = "Villa + Pool in Goa"
          desc = "Great amenities and privacy, right by the beach."
          price = "₹1,312/night"
        />
        <Card
          src = "https://cf.bstatic.com/images/hotel/max1024x768/153/153006731.jpg"
          title = "Modern Living in Amsterdam"
          desc = "Stay well-connected and explore this unique city with comfort."
          price = "₹2,014/night"
          id = "1"
        />
      </div>
    </div>
    )
}

export default Home

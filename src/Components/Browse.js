import React, {useState,useEffect} from 'react';
import './Browse.css';
import {Link} from "react-router-dom";
import SearchResult from "./SearchResult.js"


function Browse()  {
  const http = require('follow-redirects').http;
  const [hotel, setHotel]= useState([])
  useEffect(() => {
    const options = {
      'hostname': 'localhost',
      'port': 5000,
      'path': '/hotel/browse',
      'headers': {
          'Content-Type': 'application/json'
        },
      'maxRedirects': 20
    };
    http.get(options, function (res) {
      const chunks = [];
      console.log('statusCode:', res.statusCode);
      res.on('data', function (chunk) {
          chunks.push(chunk);
          });

      res.on("end", function (chunk) {
          const body = Buffer.concat(chunks);
          const hotels = JSON.parse(body)
          console.log(hotels)
          handleSearch(hotels);
        });
      });
    }, []);
    const handleSearch = (hotels) =>{
      setHotel(hotels)
      console.log(hotels)
  }
  return (
    <div>
    <div className = 'browse'>
      <div className = 'browse-info'>
        <h1>All Hotels-</h1>
      </div>
      {hotel?.map(el => (
      <Link to={"/hotel/"+el._id}>
      <SearchResult 
        img = {el.image} 
        address = {el.location.city}
        name = {el.name} 
        desc = {el.desc} 
       price = {el.rooms[0].price}/></Link>)
      )}
        </div>
    </div>
  )
}


export default Browse

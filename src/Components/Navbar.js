import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import { useHistory } from "react-router-dom";

function Navbar() {
    const[{user,},dispatch] = useStateValue();
    const http = require('follow-redirects').http;
    const history = useHistory();
    const[searchItem, setSearchItem] = useState("");
    const[user_det, setUserDet] = useState("");
    const token = localStorage.getItem('token') || null;
    const userID = localStorage.getItem('userID')|| null;
    console.log("USERID", userID);
    useEffect(()=>{
        if (userID!=null ){
          const options = {
            'hostname': 'localhost',
            'port': 5000,
            'path': '/user/' +userID,
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
                const jsonbody = JSON.parse(body)
                addUser(userID, jsonbody)
                console.log('JSONBODY', jsonbody);
                User_det(jsonbody);
              });
            });
         };
      },[]);
    
    const addUser = (userID, jsonbody) => {
        dispatch({
            type: 'SET_USER',
            item: {
                email: jsonbody.email,
                password: jsonbody.password,
                id: userID
        }, });
    };
    const User_det = (jsonbody)=>{
        setUserDet({fName:userID!=null?jsonbody.firstName:null, lName:userID!=null?jsonbody.lastName:null} )
    }
    const handleChange= (e) => {
        setSearchItem(e.target.value.trim());
    }
    const logout = () => {
        dispatch({
            type: 'REM_USER'
         });
    };
    return (
        <div>
            <div className = "navbar" >
                <Link to="/">
                    <div className = "logo">
                        <img className="navbar__logo" src ='/images/logo.png' alt=""/>
                    </div>
                </Link>
                <div className="navbar__search">
                        <input className="search__bar" name="searchItem" type="text" placeholder="Search for Hotels" onChange={handleChange} autoComplete="true"></input>
                        <Link to ={searchItem&&"/search/"+searchItem}>
                        <button type= "submit"  name="submit"><i className="search__icon fas fa-search-location"></i></button>
                        </Link>
                </div>
                <div className = "navbar__buttons">
                    <Link to ="/browse">
                        <div className="buttons__bookings">
                            <strong>Browse</strong>
                        </div>
                    </Link>
                    <Link to={!userID?"/login":"/"}>
                        <div className="buttons__login">
                            <Link to = {userID?"/user/"+userID:"/login"}>
                                <strong className="hello__user">Hello {userID?user_det?.fName: ""}</strong>
                            </Link>
                                <strong  className="sign__user" onClick={logout}>{userID?'Sign Out':'Sign in'}</strong>
                        </div>
                    </Link>
                    <Link to ="/about">
                        <div className = "buttons__about">
                            <strong>About Us</strong>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar


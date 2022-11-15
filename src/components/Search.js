import React from 'react';
import "./Search.css"
import GoldImage from "../assets/gold.png"

function Search() {
  return (
    <div className="search">
        <div className="container">
            <div className="left">
                <h2>LUXURY VACATIONS FOR TWO PEOPLE</h2>
                <p>This is some random text.This is some random text.This is some random text.This is some random text.This is some random text.This is some random text.This is some random text.</p>
                <div className="search-col-2">
                    <div className="box">
                        <div>
                            <img src={GoldImage} alt='' />
                        </div>
                    </div>
                    <div className="box"></div>
                </div>
            </div>
            <div className="right"></div>

        </div>

    </div>
  )
}

export default Search
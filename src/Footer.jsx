import React from "react";

function whatYear(){
      var date = new Date();
      var year = date.getFullYear();
      return year;
}

function Footer(){
      return (
            <div>
                  <p>Copyright {whatYear()} - Daivik Shetty</p>
            </div>
      );
}

export default Footer;
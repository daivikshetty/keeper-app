import React from "react";

function Footer(){
      const whatYear = new Date().getFullYear();
      return (
            <footer>
                  <p>Copyright© {whatYear}</p>
                  <p>Made with ❤️ by Daivik Shetty</p>
            </footer>
      );
}

export default Footer;
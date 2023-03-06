import React from "react";

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container pt-5 pb-3 text-center">
        <div className="row">
          <div className="col-xl-4">
            <h3>Download Our App</h3>
            <p>Download App for Android and Ios</p>
              <img className="me-3" width="140" src="https://megacart.pythonanywhere.com/static/image/playstore.png" alt="playstore"/>
              <img width="140" src="https://megacart.pythonanywhere.com/static/image/appstore.png" alt="appstore" />
          </div>
          <div className="col-xl-4 p-5 p-xl-1">
            <img width="280" src={process.env.PUBLIC_URL + '/images/logo3.png'} alt="logo" />
          </div>

          <div className="col-6 col-xl-2 text-center">
            <h3>Policy</h3>
            <ul className="list-unstyled">
              <li>Return Policy</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>  Security</li>
            </ul>
          </div>

          <div className="col-6 col-xl-2 text-center">
            <h3>Social</h3>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <p className="copyright text-center pt-4">
          <small>Copyright {year} MegaCart - All rights reserverd</small>{" "}
        </p>
      </div>
    </footer>
  );
};

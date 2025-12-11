import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      <footer className="footer-section">
        <img
          src="assets/images/shapes/pattern.png"
          alt=""
          className="bg-pattern"
        />
        <img
          src="assets/images/shapes/element1.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element2.png"
          alt=""
          className="element two"
        />
        <img
          src="assets/images/gradients/footer-gradient.png"
          alt=""
          className="bg--gradient"
        />
        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-xl-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-widget__logo">
                  <Link to="/">
                    <img src="assets/images/logo/white-logo.png" alt="" />
                  </Link>
                </div>
                <p className="footer-widget__desc">

                </p>
                <div className="footer-widget__social">
                  <ul className="social-icon-list">
                    <li className="social-icon-list__item">
                      <Link
                        to="https://www.facebook.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li className="social-icon-list__item">
                      <Link
                        to="https://www.twitter.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li className="social-icon-list__item">
                      <Link
                        to="https://www.linkedin.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li className="social-icon-list__item">
                      <Link
                        to="https://www.pinterest.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li className="social-icon-list__item">
                      <Link
                        to="https://www.pinterest.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* bottom Footer */}
      <div className="bottom-footer">
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text font-14">
              Copyright © 2024 DPmarket, All rights reserved.
            </p>
            <div className="footer-links">
              <Link to="#" className="footer-link font-14">
                Terms of service
              </Link>
              <Link to="#" className="footer-link font-14">
                Privacy Policy
              </Link>
              <Link to="/contact" className="footer-link font-14">
                cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;

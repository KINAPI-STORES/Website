import { Link } from "react-router-dom";

const BecomeSellerTwo = () => {
  return (
    <section className="seller-two position-relative z-index-1 overflow-hidden">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="support-two position-relative z-index-1 padding-t-60">
              <div className="row align-items-center">
                <div className="col-lg-3 col-sm-7">
                  <div className="support-content ps-0">
                    <h3 className="support-content__titleee mb-3">
                      Support 24/7
                    </h3>
                    <p className="support-content__descc mb-3 font-19">
                      Wanna talk? Send us a message
                    </p>
                    <Link
                      to="mailto:infomail@office.com"
                      className="btn btn-main btn-lg fw-300 pill"
                    >
                      infomail@office.com
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-lg-block d-none">
                  <div className="arrow-img h-100 d-flex align-items-end">
                    <img
                      src="assets/images/shapes/arrow-shape-two.png"
                      alt=""
                      className="white-version"
                    />
                    <img
                      src="assets/images/shapes/arrow-shape-two-white.png"
                      alt=""
                      className="dark-version"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-5 d-sm-block d-none">
                  <div className="support-thumb text-center">
                    <img src="assets/images/thumbs/support-img2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeSellerTwo;

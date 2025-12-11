import { Link } from "react-router-dom";

const BannerTwo = () => {
  return (
    <section className="banner-two position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/gradients/banner-two-gradient.png"
        alt=""
        className="bg--gradient white-version"
      />
      <img
        src="assets/images/gradients/banner-two-gradient-dark.png"
        alt=""
        className="bg--gradient dark-version"
      />
      <img
        src="assets/images/shapes/element-moon3.png"
        alt=""
        className="element one"
      />
      <img
        src="assets/images/shapes/element-moon2.png"
        alt=""
        className="element two"
      />
      <img
        src="assets/images/shapes/element-moon1.png"
        alt=""
        className="element three"
      />
      <div className="container container-full">
        <div className="row gy-sm-5 gy-4 align-items-center">
          <div className="col-xl-3 col-sm-6 order-xl-0 order-2">
            <div className="position-relative z-index-1">
              <img
                src="assets/images/shapes/dots-sm.png"
                alt=""
                className="dotted-img d-xl-block d-none white-version"
              />
              <img
                src="assets/images/shapes/dots-sm-white.png"
                alt=""
                className="dotted-img d-xl-block d-none dark-version"
              />
              <div className="statistics-wrapper">
                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    OTT Services
                  </h5>
                  <span className="statistics__text">Netflix, Prime, etc  </span>
                </div>
                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    Genuine Software Keys
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="banner-two__content">
              <h1 className="banner-two__title text-center mb-3">
                100% Genuine & Verified Digital Products
              </h1>
              <p className="banner-two__desc text-center">
                Every Subscription software key, plugin, assezt, or AI tool
                Purchase from Kinapi is authentic, safe, and Verified.
                No shady Sources. No risks.
              </p>
              <form action="#" className="search-box style-two">
                <div className="search-box__select select-has-icon">
                  <select className="form-control form-control py-0 border-0 bg-transparent" defaultValue={1}>
                    <option value={1} disabled="">
                      All Categories
                    </option>
                    <option value={2}>GameStore</option>
                    <option value={3}>AI Subscription</option>
                    <option value={4}>OTT Services</option>
                    <option value={5}>Softwares</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="common-input common-input--lg pill shadow-sm"
                  placeholder="Search theme, plugins & more..."
                />
                <button
                  type="submit"
                  className="btn btn-main btn-icon icon border-0"
                >
                  <img src="assets/images/icons/search.svg" alt="" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="position-relative z-index-1">
              <img
                src="assets/images/shapes/dots-sm.png"
                alt=""
                className="dotted-img d-xl-block d-none white-version"
              />
              <img
                src="assets/images/shapes/dots-sm-white.png"
                alt=""
                className="dotted-img d-xl-block d-none dark-version"
              />
              <div className="statistics-wrapper style-right">
                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    GameStores
                  </h5>
                  <span className="statistics__text">Best budget game deals</span>
                </div>
                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    AI Subscription
                  </h5>
                  <span className="statistics__text">ChatGPT,Claude,etc.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;

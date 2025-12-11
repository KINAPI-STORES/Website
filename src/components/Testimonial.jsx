
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <i className="las la-arrow-right" />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <button className={className} onClick={onClick}>
        <i className="las la-arrow-left" />
      </button>
    );
  }
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="testimonial padding-y-120 position-relative section-bg overflow-hidden">
      <img
        src="assets/images/shapes/brush.png"
        alt=""
        className="element-brush"
      />
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Clients Feedback</h3>
          </div>
          <Link to="#" className="btn btn-main btn-lg pill">
            More Feedback
          </Link>
        </div>
        <div className="testimonial-slider">
          <Slider {...settings}>
            <div className="testimonial-item hover-bg-main">
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg dark-version"
              />
              <div className="testimonial-item__rating mb-3">
                <ul className="star-rating">
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <p className="testimonial-item__desc">
                <img
                  src="assets/images/FeedBacks/logo.png"
                 alt="Client WhatsApp Feedback"
                 style={{ width: "100%", borderRadius: "10px" }}
                />
              </p>
              <div className="testimonial-item__quote">
                <img
                  src="assets/images/icons/quote.svg"
                  alt=""
                  className="quote quote-white"
                />
                <img
                  src="assets/images/icons/quote-dark.svg"
                  alt=""
                  className="quote quote-dark"
                />
              </div>
            </div>
            <div className="testimonial-item hover-bg-main">
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg dark-version"
              />
              <div className="testimonial-item__rating mb-3">
                <ul className="star-rating">
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <p className="testimonial-item__desc">
                <img
                  src="assets/images/FeedBacks/whatsapp1.jpg"
                 alt="Client WhatsApp Feedback"
                 style={{ width: "100%", borderRadius: "10px" }}
                />
              </p>
              <div className="testimonial-item__quote">
                <img
                  src="assets/images/icons/quote.svg"
                  alt=""
                  className="quote quote-white"
                />
                <img
                  src="assets/images/icons/quote-dark.svg"
                  alt=""
                  className="quote quote-dark"
                />
              </div>
            </div>
            <div className="testimonial-item hover-bg-main">
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg dark-version"
              />
              <div className="testimonial-item__rating mb-3">
                <ul className="star-rating">
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <p className="testimonial-item__desc">
                <img
                  src="assets/images/FeedBacks/whatsapp1.jpg"
                 alt="Client WhatsApp Feedback"
                 style={{ width: "100%", borderRadius: "10px" }}
                />
              </p>
              <div className="testimonial-item__quote">
                <img
                  src="assets/images/icons/quote.svg"
                  alt=""
                  className="quote quote-white"
                />
                <img
                  src="assets/images/icons/quote-dark.svg"
                  alt=""
                  className="quote quote-dark"
                />
              </div>
            </div> 



            {/* <div className="testimonial-item hover-bg-main">
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg dark-version"
              />
              <div className="testimonial-item__rating mb-3">
                <ul className="star-rating">
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <p className="testimonial-item__desc">
                <img
                  src="assets/images/FeedBacks/whatsapp1.jpg"
                 alt="Client WhatsApp Feedback"
                 style={{ width: "100%", borderRadius: "10px" }}
                />
              </p>
              <div className="testimonial-item__quote">
                <img
                  src="assets/images/icons/quote.svg"
                  alt=""
                  className="quote quote-white"
                />
                <img
                  src="assets/images/icons/quote-dark.svg"
                  alt=""
                  className="quote quote-dark"
                />
              </div>
            </div> 
            
            Copy This much so u can use it as much as u want 

            */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

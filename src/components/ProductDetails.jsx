import { Link } from "react-router-dom";


const ProductDetails = () => {

    return (
        <div className="product-details mt-32 padding-b-120">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-product-details"
                                role="tabpanel"
                                aria-labelledby="pills-product-details-tab"
                                tabIndex={0}
                            >
                                {/* Product Details Content Start */}
                                <div className="product-details">
                                    <div className="product-details__thumb">
                                        <img src="assets/images/thumbs/product-details.png" alt="" />
                                    </div>
                                    <div className="product-details__buttons flx-align justify-content-center gap-3">
                                        <Link
                                            to="#"
                                            className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center"
                                        >
                                            Live Preview
                                            <img src="assets/images/icons/eye-outline.svg" alt="" />
                                        </Link>
                                        <Link
                                            to="#"
                                            className="screenshot-btn btn btn-white pill px-sm-5"
                                            data-images='["assets/images/thumbs/product-details.png", "assets/images/thumbs/product-details.png"]'
                                        >
                                            Screenshot
                                        </Link>
                                    </div>
                                    <p className="product-details__desc">
                                        System management saas products, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident.
                                    </p>
                                    <div className="product-details__item">
                                        <h5 className="product-details__title mb-3">
                                            Template Features
                                        </h5>
                                        <ul className="product-list">
                                            <li className="product-list__item">
                                                Modern and Professional design
                                            </li>
                                            <li className="product-list__item">
                                                Built with Elementor Pro
                                            </li>
                                            <li className="product-list__item">
                                                100% Responsive &amp; mobile-friendly
                                            </li>
                                            <li className="product-list__item">
                                                12+ pre-built templates
                                            </li>
                                            <li className="product-list__item">Easy to customize</li>
                                            <li className="product-list__item">
                                                Fully responsive website
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-details__item">
                                        <h5 className="product-details__title mb-3">Layout Features</h5>
                                        <ul className="product-list">
                                            <li className="product-list__item">One-Click demo import</li>
                                            <li className="product-list__item">Unlimited color style</li>
                                            <li className="product-list__item">850+ google fonts</li>
                                            <li className="product-list__item">Powered by dpmarket</li>
                                            <li className="product-list__item">
                                                Hight resolution images
                                            </li>
                                            <li className="product-list__item">Easy to customize</li>
                                        </ul>
                                    </div>
                                    <div className="product-details__item">
                                        <h5 className="product-details__title mb-3">Font Family</h5>
                                        <ul className="product-list">
                                            <li className="product-list__item text-heading">
                                                <Link
                                                    to="https://fonts.google.com/specimen/Fira+Sans?query=fira"
                                                    className="link text-body hover-text-main hover-text-decoration-underline"
                                                >
                                                    Fira Sans
                                                </Link>
                                            </li>
                                            <li className="product-list__item text-heading">
                                                <Link
                                                    to="https://fonts.google.com/specimen/Inter?query=inter"
                                                    className="link text-body hover-text-main hover-text-decoration-underline"
                                                >
                                                    Inter
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-details__item">
                                        <h5 className="product-details__title mb-3">Support</h5>
                                        <p className="product-details__desc">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident.
                                        </p>
                                    </div>
                                    <div className="more-item">
                                        <div className="flx-between mb-4">
                                            <h5 className="more-item__title">More Items</h5>
                                            <Link
                                                to="/profile"
                                                className="text-heading fw-500 hover-text-decoration-underline"
                                            >
                                                View Author Profile
                                            </Link>
                                        </div>
                                        <div className="more-item__content flx-align">
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item1.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item2.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item3.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item4.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item5.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item6.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item7.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item8.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link
                                                    to="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item9.png" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Details Content End */}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-rating"
                                role="tabpanel"
                                aria-labelledby="pills-rating-tab"
                                tabIndex={0}
                            >
                                <div className="product-review-wrapper">
                                    <div className="product-review">
                                        <div className="product-review__top flx-between">
                                            <div className="product-review__rating flx-align">
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span className="star-rating__text text-body"> 5.0</span>
                                                </div>
                                                <span className="product-review__reason">
                                                    For{" "}
                                                    <span className="product-review__subject">
                                                        Customer Support
                                                    </span>{" "}
                                                </span>
                                            </div>
                                            <div className="product-review__date">
                                                by{" "}
                                                <Link to="#" className="product-review__user text--base">
                                                    John Doe{" "}
                                                </Link>{" "}
                                                2 month ago
                                            </div>
                                        </div>
                                        <div className="product-review__body">
                                            <p className="product-review__desc">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quibusdam itaque vitae ex possimus delectus? Voluptas
                                                expedita accusantium aperiam quo quod dolore dignissimos
                                                rerum praesentium deserunt libero recusandae quisquam est
                                                accusamus eos dolorum sit explicabo, sapiente pariatur
                                                voluptates veniam aut veritatis, magnam velit similique! Ex
                                                similique magni labore aperiam, eius quas molestiae
                                                accusantium porro eaque esse minus amet doloribus quo odit
                                                illo doloremque.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product-review">
                                        <div className="product-review__top flx-between">
                                            <div className="product-review__rating flx-align">
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span className="star-rating__text text-body"> 5.0</span>
                                                </div>
                                                <span className="product-review__reason">
                                                    For{" "}
                                                    <span className="product-review__subject">
                                                        Customer Support
                                                    </span>{" "}
                                                </span>
                                            </div>
                                            <div className="product-review__date">
                                                by{" "}
                                                <Link to="#" className="product-review__user text--base">
                                                    John Doe{" "}
                                                </Link>{" "}
                                                2 month ago
                                            </div>
                                        </div>
                                        <div className="product-review__body">
                                            <p className="product-review__desc">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quibusdam itaque vitae ex possimus delectus? Voluptas
                                                expedita accusantium aperiam quo quod dolore dignissimos
                                                rerum praesentium deserunt libero recusandae quisquam est
                                                accusamus eos dolorum sit explicabo, sapiente pariatur
                                                voluptates veniam aut veritatis, magnam velit similique! Ex
                                                similique magni labore aperiam, eius quas molestiae
                                                accusantium porro eaque esse minus amet doloribus quo odit
                                                illo doloremque.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-comments"
                                role="tabpanel"
                                aria-labelledby="pills-comments-tab"
                                tabIndex={0}
                            >
                                {/* Comment Start */}
                                <div className="comment mt-64 mb-64">
                                    <h5 className="mb-32">2 Comments</h5>
                                    <ul className="comment-list">
                                        <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                                            <div className="comment-list__thumb flex-shrink-0">
                                                <img
                                                    src="assets/images/thumbs/comment1.png"
                                                    className="cover-img"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="comment-list__content">
                                                <div className="flx-between gap-2 align-items-start">
                                                    <div>
                                                        <h6 className="comment-list__name font-18 mb-sm-2 mb-1">
                                                            Jenny Wilson
                                                        </h6>
                                                        <span className="comment-list__date font-14">
                                                            Jan 21, 2024 at 11:25 pm
                                                        </span>
                                                    </div>
                                                    <Link
                                                        className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                                                        to="#comment-box"
                                                    >
                                                        Reply
                                                        <span className="icon">
                                                            <img
                                                                src="assets/images/icons/reply-icon.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <p className="comment-list__desc mt-3">
                                                    Lorem ipsum dolor sit amet consectetur. Nec nunc
                                                    pellentesque massa pretium. Quam sapien nec venenatis
                                                    vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                                                    cras vitae neque. Necnunc pellentesque massa pretium.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <ul className="comment-list comment-list--two">
                                                <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                                                    <div className="comment-list__thumb flex-shrink-0">
                                                        <img
                                                            src="assets/images/thumbs/comment2.png"
                                                            className="cover-img"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="comment-list__content">
                                                        <div className="flx-between gap-2 align-items-start">
                                                            <div>
                                                                <h6 className="comment-list__name font-18 mb-sm-2 mb-1">
                                                                    Courtney Henry
                                                                </h6>
                                                                <span className="comment-list__date font-14">
                                                                    Jan 21, 2024 at 11:25 pm
                                                                </span>
                                                            </div>
                                                            <Link
                                                                className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                                                                to="#comment-box"
                                                            >
                                                                Reply
                                                                <span className="icon">
                                                                    <img
                                                                        src="assets/images/icons/reply-icon.svg"
                                                                        alt=""
                                                                    />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <p className="comment-list__desc mt-3">
                                                            Lorem ipsum dolor sit amet consectetur. Nec nunc
                                                            pellentesque massa pretium. Quam sapien nec venenatis
                                                            vivamus sed cras faucibus.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* Comment End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;
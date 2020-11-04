import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ASSETS
import Home1 from '../../../3. assets/img/Home/home1.jpg';
import Home2 from '../../../3. assets/img/Home/home2.jpg';
import Home3 from '../../../3. assets/img/Home/home3.jpg';

const responsive = {
    md: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    },
}

const items = [
    {
        image: Home1,
        url: "/campaign",
        button: "Lebih Lanjut",
        tag: "#HidupiKarya",
        text: "Bermacam ide film kreatif ada disini",
    },
    {
        image: Home2,
        url: "/campaign",
        button: "Lebih Lanjut",
        tag: "#BikinNyata",
        text: "Realisasikan karya film kamu disini",
    },
    {
        image: Home3,
        url: "/buat-campaign",
        button: "Buat Proyek",
        tag: "#MulaiDiSini",
        text: "Dari Karya Bikin Perubahan",
    },
]

const JumbotronPage = (props) => {
    return (
        <Carousel
            infinite
            autoPlay
            showDots={true}
            draggable={true}
            autoPlaySpeed={4000}
            responsive={responsive}
            containerClass="carousel-container"
        >
            {items.map((item,idx) => (
                <div className="carousel-slide">
                    <img
                        alt={item.image}
                        src={item.image}
                        className="carousel-img"
                    />
                    <div className="carousel-text">
                        <h3>{item.tag}</h3>
                        <p>{item.text}</p>
                        <Link to={item.url} className="btn border carousel-btn">
                            {item.button}
                        </Link>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

const mapStateToProps = ({userData}) => {
    return {...userData}
}

export default connect(mapStateToProps)(JumbotronPage);
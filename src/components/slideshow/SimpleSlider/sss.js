import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import "../SimpleSlider/slick-theme.css";
import "../SimpleSlider/slick-theme.css";
import MovieCard from "../MovieCard/index";
import axios from 'axios';

export default function SimpleSlider  ({ initialSlide = 0 }) {
  const jwt = localStorage.getItem("jwt");
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3000/cloudImg/allImages",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${jwt}`,
      },
    })
    .then(res => setImages(res.data))
    .catch(err => console.error(err));
  }, [jwt]);

  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    
    <Slider className="rss" ref={slider} {...settings}>
      {images.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </Slider>

  );
}

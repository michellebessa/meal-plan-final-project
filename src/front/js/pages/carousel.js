import React, { useContext } from "react";
import "../../styles/carousel.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CarouselSlide = ({ src, alt, isFirst, name, id }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className={`carousel-item${isFirst ? " active" : ""}`}>
      <h1 className="mt-10">{name}</h1>
      <img src={src} className="m-auto w-100 h-100 mb-0" alt={alt} />
      <Link to={"/recipedetails/" + id}>
        <button
          className="takemetorecipebutton"
        >
          Take me to recipe
        </button>
      </Link>
    </div>
  );
};

export const Carousel = ({ carouselId, children, style }) => {
  return (
    <div
      id={`${carouselId}`}
      className="carousel slide"
      data-bs-ride="carousel"
      style={style}
    >
      <div className="carousel-inner">{children}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

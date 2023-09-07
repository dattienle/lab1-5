import React, { useContext, useState } from "react";
import listFilmsData from "../../assets/data";
import "./style.scss";
import { ThemeContext } from "../../theme/theme/ThemeContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className="film"
      style={{
        backgroundColor: theme.backgroundColor,
      }}
    >
      <h3 className="film-heading" style={{ color: theme.color }}>
        Recommend for you
      </h3>
      <div className="container" style={{ borderBottom: theme.borderBottom }}>
        {listFilmsData.map((film) => (
          <div className="film-column" key={film.ID}>
            <div className="film-card">
              <img src={film.Image} alt="" className="film-image" />
              <h3 className="film-name">{film.Title}</h3>
              <p className="film-release">{film.Year}</p>
              <p className="film-detail">
                <Link to={`detail/${film.ID}`}>
                  <button>
                    <a>
                      Detail <i class="fa-solid fa-angle-right"></i>
                    </a>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;

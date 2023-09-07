import React, { memo, useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import "./style.scss";
const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: theme.backgroundColor,
        paddingTop: "3rem",
      }}
    >
      <div className="container footer-container">
        <div className="footer-item">
          <a
            href="index.html"
            className="footer-logo"
            style={{
              color: theme.color,
            }}
          >
            B
          </a>
        </div>
        <div className="footer-item">
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Events for Kids
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Events for Parents
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Events for Guests
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Game & Gifts
          </a>
        </div>
        <div className="footer-item">
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Events
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Who we are
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Services
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Features
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Reviews
          </a>
        </div>
        <div className="footer-item">
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Careers
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Press
          </a>
          <a
            href="#!"
            className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Help
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

import React from "react";
import "./style.scss";
import CloseIcon from "@mui/icons-material/Close";
export default function Trailer({ setIsOpen, film }) {
  return (
    <div>
      <div className="traler-show">
        <div
          id="traler1"
          className="traler"
          style={{ display: "block", top: "35%" }}
        >
          {/* <div className="traler-content">
            <h4>Video for {film.Title} </h4>
            <p></p>
          </div> */}
          <div>
            <video
              width="100%"
              height="580px"
              controls
              style={{ borderRadius: "2rem" }}
              src={`../${film.Clip}`}
            ></video>
          </div>
          <div className="traler-footer">
            <a
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

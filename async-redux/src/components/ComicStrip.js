import React from "react";
import { connect } from "react-redux";

const ComicStrip = (props) => {
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          <h2> {props.comic.safe_title} </h2>
          <h3>
            {" "}
            Date: {props.comic.month} / {props.comic.day} / {props.comic.year}{" "}
          </h3>
          <div className="img-container">
            {" "}
            <img
              src={props.comic.img}
              alt={props.comic.alt}
              title={props.comic.alt}
            />
            <p> {props.comic.alt} </p>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    comic: state.comic,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(ComicStrip);

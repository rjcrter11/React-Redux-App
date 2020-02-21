import React from "react";
import { connect } from "react-redux";

const ComicStrip = (props) => {
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div className="comic-container">
          <h2 className="title"> {props.comic.safe_title} </h2>
          <h3 className="date">
            Date: {props.comic.month} / {props.comic.day} / {props.comic.year}{" "}
          </h3>
          <div className="img-container">
            <img
              src={props.comic.img}
              alt={props.comic.alt}
              title={props.comic.alt}
            />
          </div>
          <p className="desc"> {props.comic.alt} </p>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    comic: state.comic,
    error: state.error,
    fetchingData: state.fetchingData
  };
};

export default connect(mapStateToProps, {})(ComicStrip);

import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const Comic = (props) => {
  console.log(props);

  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.fetchingData ? (
        <div className="loading">Fetching your comic</div>
      ) : (
        <div className="btn-container">
          <button className="fetch-btn" onClick={handleGetData}>
            Get Random Comic
          </button>
        </div>
      )}
    </>
  );
};

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    fetchingData: state.fetchingData,
    chooseComic: state.chooseComic
  };
};

export default connect(mapStatetoProps, { getData })(Comic);

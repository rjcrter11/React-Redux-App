import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";
import LoadingIcon from "../components/LoadingIcon";

const Comic = (props) => {
  console.log(props);

  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.fetchingData ? (
        <LoadingIcon />
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
    comic: state.comic
  };
};

export default connect(mapStatetoProps, { getData })(Comic);

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
        <div>Fetching your comic</div>
      ) : (
        <button onClick={handleGetData}>Get Daily Comic</button>
      )}
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    fetchingData: state.fetchingData
  };
};

export default connect(mapStatetoProps, { getData })(Comic);

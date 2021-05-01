import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      {/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
      {/* Optional Chaining */}
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);

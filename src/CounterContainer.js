import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  number: state
});

const mapDispatchToProps = dispatch => ({
  add10: () => dispatch({ type: "ADD10" }),
  remove10: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" }),
  add1: () => dispatch({ type: "ADD" }),
  remove1: () => dispatch({ type: "REMOVE" })
});


const CounterContainer = ({ number, add10, remove10, reset, add1, remove1 }) => (
  <div>
    <p>{number}</p>
    <button onClick={add10}>+10</button>
    <button onClick={remove10}>-10</button>
    <button onClick={reset}>reset</button>
    <button onClick={add1}>+1</button>
    <button onClick={remove1}>-1</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
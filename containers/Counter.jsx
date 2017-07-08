import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import Header from "../components/Header"
import CounterCountent from "../components/Counter"
import * as CounerActions from "../actions/counter"

class Counter extends Component{

  static PropTypes = {
    value: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  render(){
    const{ value, actions } = this.props
    return(
      <div>
        <Header />
        <CounterContent value={value} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.counter
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(CounterActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

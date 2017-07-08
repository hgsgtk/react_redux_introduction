import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SignUpChild1 extends Component{
  render(){
    return(
      <div>
        <h1>SignUpChild1</h1>
      </div>
    );
  }
}

function mapStateTpProps(state){
  return{

  };
}

function mapDispatchToProps(dispatch){
  return{

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

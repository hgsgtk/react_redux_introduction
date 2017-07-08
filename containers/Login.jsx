import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

class Login extends Component{
  render(){
    return(
      <div>
        <h1>Login Page</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{

  };
}

function mapDispatchToProps(dispatch){
  return{

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

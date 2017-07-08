import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class SignUp extends Component{
  render(){
    return(
      <div>
        <h1>SignUp Page</h1>
        {this.props.children}
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

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

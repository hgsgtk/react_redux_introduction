import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class NotFound extends Component{
  render(){
    return(
      <div>
        <h1>Not Found</h1>
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

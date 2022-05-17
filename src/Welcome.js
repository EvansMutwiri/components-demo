import React from "react";

class Welcome extends React.Component {
    render() {
        return (
        <>
            <h1>Hello, i am {this.props.name}</h1>
            <h2>Description: {this.props.desc}</h2>
        </>
        );
    }
  }

  export default Welcome;
  
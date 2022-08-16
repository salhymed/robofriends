import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, errorInfo){
        this.setState({hasError: true})
        console.log('errorInfo', errorInfo)
    }
    render (){
        if(this.state.hasError){
            return <h1 className="tc">Something went wrong !</h1>
        }
        
        return this.props.children;
    }
}
export default ErrorBoundry;
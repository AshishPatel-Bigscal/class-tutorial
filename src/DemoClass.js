import React from "react";

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

export default class DemoClass extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
        this.state = {
            a: 10,
        }
    }
    componentDidUpdate() {
        console.log("DID UPDATE");
    }
    componentDidMount() {
        this.inputElement.current.focus();
        console.log("DID MOUNT")
        this.setState({ a: 20 })
    }
    componentWillUnmount() {
        console.log("Will UNMOUNT")
    }
    render() {
        return (
            <CustomTextInput inputRef={this.inputElement} />
        );
    }
}
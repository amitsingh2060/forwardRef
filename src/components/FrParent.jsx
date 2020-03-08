import React, { Component } from 'react';
import FrInput from './FrInput';

class FrParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    handleClick = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FrInput ref={this.inputRef}/>
                <button onClick={this.handleClick}>focus Input</button>
            </div>
        );
    }
}

export default FrParent;
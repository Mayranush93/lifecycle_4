import React, {Component} from 'react';
import Menu from "./components/Menu";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            num: 1
        }
    }

    handleClick = () => {
        const {show} = this.state;
        this.setState({show: !show})
    }
    handleChange = () => {
        const {num} = this.state;
        this.setState({num: num + 1})
    }
    render() {
        const {show, num} = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>{show ? "Hide" : "Show"}</button>
                <button onClick={this.handleChange}>Add</button>
                {show ? <Menu num={num}/> : null}
            </div>
        );
    }
}

export default App;
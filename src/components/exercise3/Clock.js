import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        setInterval((this.changeTime.bind(this),1000))
    }
    changeTime() {
        this.setState({
            date: new Date()
        });
    }   

    render() { 
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}
 
export default Clock;
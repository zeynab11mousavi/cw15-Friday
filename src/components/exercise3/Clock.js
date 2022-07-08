import {
    Component
} from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        setInterval(this.changeTime.bind(this), 1000)
    }
    changeTime() {
        console.log(1)
        this.setState({
            date: new Date()
        });
    }

    render() {
        return ( 
            <div>
                <h1>Hello user!</h1>
                <h1>{`it is ${this.state.date.toLocaleTimeString()}`}</h1>
            </div>
        );
    }
}

export default Clock;
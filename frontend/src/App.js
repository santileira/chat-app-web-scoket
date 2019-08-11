import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./index";

class App extends Component {
    constructor(props) {
        super(props);
    }

    send() {
        console.log("hello");
        sendMsg("hello");
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.send}>Hit</button>
            </div>
        );
    }
}

export default App;

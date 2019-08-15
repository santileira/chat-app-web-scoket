import React, {Component} from "react";
import "./App.css";
import {connect, sendMsg} from "./index";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

const URL = "ws://localhost:8080/ws";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {chatHistory: []}
    }

    ws = new WebSocket(URL);

    componentDidMount() {
        this.ws.onopen = () => {
            console.log("Successfully Connected");
        };
        this.ws.onmessage = msg => {
            console.log(msg);
            this.addMessage(msg);
        };

        this.ws.onclose = event => {
            console.log("Socket Closed Connection: ", event);
        };

        this.ws.onerror = error => {
            console.log("Socket Error: ", error);
        };
    }

    addMessage = message => {
        this.setState(prevState => ({
            chatHistory: [...this.state.chatHistory, message]
        }))
    };

    submitMessage = messageString => {
        this.ws.send(messageString);
    };

    render() {

        return (
            <div className="App">
                <Header/>
                <ChatHistory chatHistory={this.state.chatHistory}/>
                <button onClick={this.submitMessage}>Hit</button>
            </div>
        );
    }


}

export default App;

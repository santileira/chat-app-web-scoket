import React, {Component} from "react";
import "./App.css";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from "./components/ChatInput/ChatInput";

const URL = "ws://localhost:8080/ws";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {chatHistory: []}
        this.send = this.send.bind(this);
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
        console.log(messageString);
        this.ws.send(messageString);
    };

    render() {

        return (
            <div className="App">
                <Header/>
                <ChatHistory chatHistory={this.state.chatHistory}/>
                <ChatInput send={this.send}/>
            </div>
        );
    }

    send(event) {
        if (event.keyCode === 13) {
            this.submitMessage(event.target.value);
            event.target.value = "";
        }
    }


}

export default App;

# chat-app-web-scoket

This repository has a chat application in Go with ReactJS.

We are using Go for our BackEnd and ReactJS for our FrontEnd.
We have two folders called BackEnd and FrontEnd. BackEnd folder stores Go code and FrontEnd folder stores ReactJS code.

The chat application allows multiple clients. Each client can connect, disconnect and send messages to the others clients.
When a client connect/disconnect, the others clients will receive a message and show it in the FrontEnd. On the other hand, when a client send a message, the others clients too will receive and show it in the FrontEnd.

To start the chat application, first we must run the BackEnd and then we must run the FrontEnd. In each README.md in the folders, we can see how exec them.

## Course

https://tutorialedge.net/projects/chat-system-in-go-and-react/
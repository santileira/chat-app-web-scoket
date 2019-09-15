package main

import (
	"fmt"
	"net/http"

	"github.com/santileira/chat-app-web-socket/backend/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")

	// upgrade connection to web socket
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	// creates new client with pool and connection
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	// registers client in the pool
	pool.Register <- client
	client.Read()
}

func setUpRoutes() {
	// creates and starts new pool.
	pool := websocket.NewPool()
	go pool.Start()

	// sets endpoint to send and receives messages
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})

}

func main() {
	fmt.Println("Distributed Chat App v0.01")
	setUpRoutes()
	// starts application
	http.ListenAndServe(":8080", nil)
}

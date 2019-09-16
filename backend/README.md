## BackEnd

In the project directory, we can run:

### `docker build --tag=backend .`

Creates docker image.

### `docker run -it -p 8080:8080 backend`

Runs the app in the development mode in the container.

### `go run main.go`

Runs the app in the development mode outside of the container.


### Library used

- https://github.com/gorilla/websocket

- https://blog.golang.org/using-go-modules
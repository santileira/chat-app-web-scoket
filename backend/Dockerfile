FROM golang:1.12.9-alpine3.9

RUN mkdir /app
ADD . /app/

# Set the current working directory inside the container
WORKDIR /app

# Install git.
RUN apk add git

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download
ENV GO111MODULE=on
ENV CGO_ENABLED=0
RUN go build -o main .

CMD ["/app/main"]
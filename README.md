# Fibonacci Sequence REST API

A simple REST API created using Node.js and Express.js framework, to generate Fibonacci sequences

## Getting Started

- Clone this repository
- `npm install` to install all required dependencies
- `npm start` to start the local server

### Prerequisites

- Node.js
```
https://nodejs.org/en/
```

- Docker (Optional)
```
https://docs.docker.com/get-docker/
```

## Building Docker Image

Run the following command in the root directory of the project
```
docker build --tag yourusername/repository-name .
````

For example:
```
docker build --tag simkailong/fibonacci .
````

## Running the Docker Container

```
docker run -p 8000:8000 -d yourusername/repository-name
```
For example:
```
docker run -p 8000:8000 -d simkailong/fibonacci
````

## Built With

- [Expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests

## Authors

* **SIM Kai Long** (https://github.com/SimKaiLong)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

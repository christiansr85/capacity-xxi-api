# capacity-xxi-api
API Rest used to serve the capacity to any client.

## Setup

The requirements needed to run the API are the following:

- Node (v10 or higher)
- MySQL

## Usage

First of all we need to install dependencies. You have to open a `terminal` (or a `cmd` or a `powershell` if you are using windows), open the project directory (you have to be in the floder where the `package.json` file is present), and run the next command:

```
npm install
```

Next you should be able to launch the server:

```
npm start
```

or 

```
npm run dev
```

The second one raises a server which listens to any change and restarts itself at once.

## Try it

You can test your server through `Postman` or even from your browser by querying the following url:

http://localhost:4000/

You can also query, for instance, the list of available parameters with the next call:

http://localhost:4000/parameters

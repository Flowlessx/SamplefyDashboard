const http = require('http');
const cloudcmd = require('cloudcmd');
const io = require('socket.io');
const app = require('express')();

const port = 1337;
const prefix = '/';

const server = http.createServer(app);
const socket = io.listen(server, {
    path: `{prefix}socket.io`
});

const config = {
    name: 'cloudcmd :)'
};

const plugins = [
    __dirname + '/plugin.js'
];

const filePicker = {
    data: {
        FilePicker: {
            key: 'key'
        }
    }
};

// override option from json/modules.json
const modules = {
    filePicker,
};

app.use(prefix, cloudcmd({
    socket,  // used by Config, Edit (optional) and Console (required)
    config,  // config data (optional)
    plugins, // optional
    modules, // optional
}));

server.listen(port);

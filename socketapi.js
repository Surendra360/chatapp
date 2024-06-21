const io = require("socket.io")();
const socketapi = {
    io: io
};

const userModel = require('./models/user')

// Add your socket.io logic here!
io.on("connection", function (socket) {


    socket.on('join', async username => {
        await userModel.findOneAndUpdate({
            username
        }, {
            socketId: socket.id
        })
    })
    socket.on('disconnect', async () => {

        await userModel.findOneAndUpdate({
            socketId: socket.id
        }, {
            socketId: ""
        })

    })


});
// end of socket.io logic

module.exports = socketapi;
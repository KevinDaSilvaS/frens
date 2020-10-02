const app = require('./app/start');  

app.listen(7333, () => {
    console.log("Listen to port 7333", "localhost:7333");
})
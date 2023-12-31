const app = require('./app');

// Server
const PORT = process.env.PORT || 8900;
app.listen(PORT,() => {
    console.log(`Server started on PORT: ${PORT}`);
})
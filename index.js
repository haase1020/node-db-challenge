const server = require('./server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`\n ** Server is listening to the magic on port ${PORT} ** \n`);
});


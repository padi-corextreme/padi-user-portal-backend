module.exports = {
    get : (req, res) => {
        res.send('GET handler for /products route.');
    },
    post : (req, res) => {
        res.send('POST handler for /products route.');
    },
    put : (req, res) => {
        res.send('PUT handler for /products route.');
    },
    delete : (req, res) => {
        res.send('DELETE handler for /products route.');
    }
};
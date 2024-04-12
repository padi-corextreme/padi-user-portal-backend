module.exports = {
    get : (req, res) => {
        res.send('GET handler for /orders route.');
    },
    post : (req, res) => {
        res.send('POST handler for /orders route.');
    },
    put : (req, res) => {
        res.send('PUT handler for /orders route.');
    },
    delete : (req, res) => {
        res.send('DELETE handler for /orders route.');
    }
};
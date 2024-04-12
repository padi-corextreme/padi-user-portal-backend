module.exports = {
    get : (req, res) => {
        res.send('GET handler for /users route.');
    },
    post : (req, res) => {
        res.send('POST handler for /users route.');
    },
    put : (req, res) => {
        res.send('PUT handler for /users route.');
    },
    delete : (req, res) => {
        res.send('DELETE handler for /users route.');
    }
}
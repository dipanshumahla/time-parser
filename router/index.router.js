const TimeRouter = require("./time.router");

const router = async function(req, res) {
    let response = {};
    let responseStatus = 200;

    try{
        switch(req.url) {
            case '/timeStories' :
                response = await TimeRouter.stories();
                break;
            default:
                response = {"error" : "Route Undefined"};
                responseStatus = 404;
        }
    } catch (error) {
        console.log("Error: ", error);
        responseStatus = 400;
    }

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(responseStatus);
    res.end(JSON.stringify(response));
}

module.exports = router;
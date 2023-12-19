const noHandlers = (request, response) => {
    response.status(404)
        .send("No code available to handle this request");
};

// const requestLogger = (request, response, next) => {
//     info("Method:", request.method);
//     info("Path:  ", request.path);
//     info("Body:  ", request.body);
//     next();
// };

module.exports = {
    noHandlers,
    // requestLogger,
};
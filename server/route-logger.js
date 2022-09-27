// Some example Middleware, logs methods and lets them pass (doesn't do much else for now)

const logRoute = (req, res, next) => {
    console.log(req.method, req.originalUrl);

    next();
}

module.exports = logRoute;
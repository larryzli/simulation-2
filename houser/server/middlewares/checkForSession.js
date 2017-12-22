module.exports = (req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            id: null,
            username: ""
        };
    }
    next();
};

module.exports = {
    login(req, res) {
        const db = req.app.get("db");
        const { username, password } = req.body;
        db
            .select_user([username, password])
            .then(response => {
                req.session.user.id = response.id;
                req.session.user.username = response.username;
                return res.status(200).json(req.session.user);
            })
            .catch(console.log);
    },
    register(req, res) {
        const db = req.app.get("db");
        const { username, password } = req.body;
        db
            .new_user([username, password])
            .then(response => {
                req.session.user.id = response.id;
                req.session.user.username = response.username;
                return res.status(200).json(req.session.user);
            })
            .catch(console.log);
    },
    signout(req, res) {
        req.session.destroy();
        return res.status(200).json(req.session);
    },
    getUserSession(req, res) {
        // Not needed, for testing only (I think?)
        return res.status(200).json(req.session.user);
    }
};

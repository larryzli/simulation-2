module.exports = {
    createHome(req, res) {
        const db = req.app.get("db");
        const {
            houseName,
            description,
            address,
            city,
            state,
            zip,
            image_url,
            loan_amount,
            monthly_mortgage,
            desired_rent
            // user_id // temp user_id for postman testing
        } = req.body;
        const user_id = req.session.user.id; // need to integrate sessions
        db
            .new_home([
                houseName,
                description,
                address,
                city,
                state,
                zip,
                image_url,
                loan_amount,
                monthly_mortgage,
                desired_rent,
                user_id
            ])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    },
    getUserHomes(req, res) {
        const db = req.app.get("db");
        // const { user_id } = req.body; // temp user_id for postman testing
        const user_id = req.session.user.id; // need to integrate sessions
        if (req.query.rent) {
            // get filtered homes if query 'rent' exists
            db
                .select_homes_filtered([user_id, rent])
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(console.log);
        } else {
            // get all homes for user
            db
                .select_homesByUserId([user_id])
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(console.log);
        }
    },
    deleteHome(req, res) {
        const db = req.app.get("db");
        const { home_id } = req.body;
        db
            .delete_home([home_id])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    }
};

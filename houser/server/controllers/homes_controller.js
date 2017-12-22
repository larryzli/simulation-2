import { start } from "repl";

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
            desired_rent,
            user_id // temp user_id for postman testing
        } = req.body;
        // const user_id = req.session.user_id; // need to integrate sessions
        db
            .create_home([
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
        const { user_id } = req.body; // temp user_id for postman testing
        // const user_id = req.session.user_id; // need to integrate sessions
        db
            .select_homesByUserId([user_id])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    },
    getFilteredHomes(req, res) {
        const db = req.app.get("db");
        const { user_id, desired_rent_filter } = req.body; // temp user_id for postman testing
        // const user_id = req.session.user_id; // need to integrate sessions
        db
            .select_homes_filtered([user_id, desired_rent_filter])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    }
};

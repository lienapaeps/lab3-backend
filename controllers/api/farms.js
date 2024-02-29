const Farm = require("../../models/farm")

const create = (req, res) => {
    let farm = new Farm();

    farm.name = req.body.name;
    farm.street = req.body.street;
    farm.streetnumber = req.body.streetnumber;
    farm.postalcode = req.body.postalcode;
    farm.city = req.body.city;
    farm.phonenumber = req.body.phonenumber;
    farm.location = req.body.location;

    farm.save()
        .then(doc => {
            res.json({
                "status": "success",
                "message": "Boerderij is toegevoegd",
                "data": {
                    "farm": doc
                }
            })
        })
        .catch(err => {
            res.json({
                "status": "error",
                "message": "Boerderij kon niet worden toegevoegd",
                "error": err
            })
        })
};

const getAll = (req, res) => {
    Farm.find()
        .then(docs => {
            res.json({
                "status": "success",
                "message": "Boerderijen gevonden",
                "data": {
                    "farms": docs
                }
            })
        })
        .catch(err => {
            res.json({
                "status": "error",
                "message": "Boerderijen niet gevonden",
                "error": err
            })
        })
}

module.exports.create = create;
module.exports.getAll = getAll;
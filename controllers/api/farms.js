const Farm = require("../../models/farm")

const create = (req, res) => {
    let farm = new Farm();

    farm.name = req.body.name;
    farm.farmImage = req.body.farmImage;
    farm.description = req.body.description;
    farm.adress.street = req.body.adress.street;
    farm.adress.streetnumber = req.body.adress.streetnumber;
    farm.adress.zipcode = req.body.adress.zipcode;
    farm.adress.city = req.body.adress.city;
    farm.coordinates.latitude = req.body.coordinates.latitude;
    farm.coordinates.longitude = req.body.coordinates.longitude;
    farm.openinghours = req.body.openinghours;

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

const getById = (req, res) => {
    Farm.findById(req.params.id)
        .then(doc => {
            res.json({
                "status": "success",
                "message": "Boerderij gevonden met id: " + req.params.id,
                "data": {
                    "farm": doc
                }
            })
        })
        .catch(err => {
            res.json({
                "status": "error",
                "message": "Boerderij niet gevonden",
                "error": err
            })
        })

}

module.exports.create = create;
module.exports.getAll = getAll;
module.exports.getById = getById;
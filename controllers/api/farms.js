const Farm = require("../../models/farm")

const create = (req, res) => {
    let farm = new Farm();

    // farm.owner = req.user._id;
    farm.owner = req.body.owner;
    farm.name = req.body.name;
    farm.farmImage = req.body.farmImage;
    farm.description = req.body.description;
    farm.adress.street = req.body.adress.street;
    farm.adress.number = req.body.adress.number;
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

// get activities by farm id
const getActivities = (req, res) => {

    const farmId = req.params.id;

    Farm.findById(farmId)
        .populate('activities')
        .then(doc => {
            res.json({
                "status": "success",
                "message": "Activiteiten gevonden voor boerderij met id: " + farmId,
                "data": {
                    "activities": doc.activities
                }
            })
        })
        .catch(err => {
            res.json({
                "status": "error",
                "message": "Activiteiten niet gevonden voor boerderij met id: " + farmId,
                "error": err
            })
        })
}

//update farm by id

module.exports.create = create;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getActivities = getActivities;
// module.exports.update = update;
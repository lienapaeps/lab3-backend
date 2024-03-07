const Package = require("../../models/package")

const create = (req, res) => {
    let package = new Package();

    package.name = req.body.name;
    package.description = req.body.description;
    package.price = req.body.price;

    package.save()
        .then(doc => {
            res.json({
                "status": "success",
                "message": "Pakket is toegevoegd",
                "data": {
                    "farm": doc
                }
            })
        })
        .catch(err => {
            res.json({
                "status": "error",
                "message": "Pakket kon niet worden toegevoegd",
                "error": err
            })
        })
};

const getAll = (req, res) => {
    Package.find()
        .then(docs => {
            res.json({
                "status": "success",
                "message": "Pakketten gevonden",
                "data": {
                    "farms": docs
                }
            })
        })
        .catch(err => {
            res.json({
                "status": "error",
                "message": "Pakketten niet gevonden",
                "error": err
            })
        })
}

module.exports.create = create;
module.exports.getAll = getAll;
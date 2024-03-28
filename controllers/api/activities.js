const Activity = require("../../models/activity")
const Farm = require("../../models/farm")

const create = (req, res) => {
    let activity = new Activity();

    activity.title = req.body.title;
    activity.description = req.body.description;
    activity.category = req.body.category;
    activity.image = req.body.image;
    activity.start = {
        date: req.body.start.date,
        time: req.body.start.time
    };
    activity.end = {
        date: req.body.end.date,
        time: req.body.end.time
    };
    activity.farm = req.body.farm;

    
    activity.save()
        .then(doc => {
            // Bij succesvol opslaan van de activiteit, update de bijbehorende boerderij
            Farm.findByIdAndUpdate(req.body.farm, { $addToSet: { activities: doc._id } })
                .then(() => {
                    console.log("Boerderij bijgewerkt met nieuwe activiteit");
                    res.json({
                        "status": "success",
                        "message": "Activiteit is toegevoegd",
                        "data": {
                            "activity": doc
                        }
                    });
                })
                .catch(err => {
                    console.error("Fout bij het bijwerken van de boerderij:", err);
                    res.json({
                        "status": "error",
                        "message": "Activiteit is toegevoegd, maar er was een fout bij het bijwerken van de boerderij",
                        "data": {
                            "activity": doc
                        },
                        "error": err
                    });
                });
        })
        .catch(err => {
            res.json({
                "status": "error",
                "message": "Activiteit kon niet worden toegevoegd",
                "error": err
            });
        });
};

// get activity by id
const getById = (req, res) => {
    Activity.findById(req.params.id)
        .then(doc => {
            res.json({
                "status": "success",
                "message": "Activiteit gevonden",
                "data": {
                    "activity": doc
                }
            })
        })
        .catch(err => {
            res.json({
                "status": "error",
                "message": "Activiteit niet gevonden",
                "error": err
            })
        })
};

module.exports.create = create;
module.exports.getById = getById;
const Lesson = require('../models/lesson');

exports.findAll = (req, res) => {
    Lesson.showAll(req.params.ID_chude, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of lessons with topic id ${req.params.ID_chude}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of lessons with topic id " + req.params.ID_chude
                });
            }
        } else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Lesson.findById(req.params.ID_baihoc, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of lessons with id ${req.params.ID_baihoc}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of lessons with id " + req.params.ID_baihoc
                });
            }
        } else res.send(data);
    })
}

const Course = require('../models/course');

exports.find = (req, res) => {
    Course.findById(req.params.ID_khoahoc, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Profile with id ${req.params.ID_khoahoc}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Profile with id " + req.params.ID_khoahoc
                });
            }
        } else res.send(data);
    })
}
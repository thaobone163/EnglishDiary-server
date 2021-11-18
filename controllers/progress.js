const Progress = require('../models/progress');

exports.status = (req,res) => {
    Progress.showStatus(req.params.ID_nguoihoc, req.params.ID_baihoc, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    trangthai: `null`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving status with id " + req.params.ID_nguoihoc + " and " + req.params.ID_baihoc
                });
            }
        } else res.send(data);
    })
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const progress = new Progress({
        ID: req.body.ID,
        ID_nguoihoc: req.body.ID_nguoihoc,
        ID_baihoc: req.body.ID_baihoc,
        trangthai: req.body.trangthai
    });
    Progress.updateStatus(progress, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while update the progress."
            });
        else res.send(data);
    })
}

exports.count = (req, res) => {
    Progress.countDone(req.params.ID_nguoihoc, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving status with id " + req.params.ID_nguoihoc
                });
            }
        } else res.send(data);
    })
}

exports.countAll = (req, res) => {
    Progress.countALL((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving"
                });
            }
        } else res.send(data);
    })
}
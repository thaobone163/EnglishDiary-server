const Topic = require('../models/topic');

exports.findAll = (req, res) => {
    Topic.showAll(req.params.ID_kh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of topics with course id ${req.params.ID_kh}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of topics with course id " + req.params.ID_kh
                });
            }
        } else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Topic.findById(req.params.ID_chude, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of topics with course id ${req.params.ID_chude}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of topics with course id " + req.params.ID_chude
                });
            }
        } else res.send(data);
    })
}

exports.search = (req, res) => {
    Topic.search(req.params.search, req.params.ID_kh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Topics with suggest ${req.params.search}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Topics with suggest " + req.params.search
                });
            }
        } else res.send(data);
    })
}
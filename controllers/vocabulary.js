const Vocabulary = require('../models/vocabulary');

exports.findAll = (req, res) => {
    Vocabulary.showAll(req.params.ID_baihoc, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of vocabulary with lesson id ${req.params.ID_baihoc}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of vocabulary with lesson id " + req.params.ID_baihoc
                });
            }
        } else res.send(data);
    });
};

exports.search = (req, res) => {
    Vocabulary.search(req.params.search, (err, data) => {
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
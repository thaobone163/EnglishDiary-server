const Song = require('../models/song');

exports.findAll = (req, res) => {
    Song.showAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of songs.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of songs"
                });
            }
        } else res.send(data);
    });
};

exports.find = (req, res) => {
    Song.findByIdTopic(req.params.ID_chude, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of songs with topic id ${req.params.ID_chude}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of songs with topic id " + req.params.ID_chude
                });
            }
        } else res.send(data);
    })
}

exports.search = (req, res) => {
    Song.search(req.params.search,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found songs with suggest ${req.params.search}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving songs with suggest " + req.params.search
                });
            }
        } else res.send(data);
    })
}

exports.load = (req, res) => {
    Song.showContent(req.params.ID_baihat, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found content with id ${req.params.ID_baihat}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving content with id " + req.params.ID_baihat
                });
            }
        } else res.send(data);
    })
}
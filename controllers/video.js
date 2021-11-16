const Video = require('../models/video');

exports.findAll = (req, res) => {
    Video.showAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of videos.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of videos"
                });
            }
        } else res.send(data);
    });
};

exports.find = (req, res) => {
    Video.findByIdTopic(req.params.ID_chude, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of video with topic id ${req.params.ID_chude}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of videos with topic id " + req.params.ID_chude
                });
            }
        } else res.send(data);
    })
}

exports.search = (req, res) => {
    Video.search(req.params.search,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found videos with suggest ${req.params.search}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Videos with suggest " + req.params.search
                });
            }
        } else res.send(data);
    })
}

exports.load = (req, res) => {
    Video.showContent(req.params.ID_video, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found content with id ${req.params.ID_video}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving content with id " + req.params.ID_video
                });
            }
        } else res.send(data);
    })
}
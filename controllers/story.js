const Story = require('../models/story');

exports.findAll = (req, res) => {
    Story.showAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of stories.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of stories"
                });
            }
        } else res.send(data);
    });
};

exports.find = (req, res) => {
    Story.findByIdTopic(req.params.ID_chude, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list of stories with topic id ${req.params.ID_chude}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list of stories with topic id " + req.params.ID_chude
                });
            }
        } else res.send(data);
    })
}

exports.search = (req, res) => {
    Story.search(req.params.search,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found stories with suggest ${req.params.search}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving stories with suggest " + req.params.search
                });
            }
        } else res.send(data);
    })
}

exports.load = (req, res) => {
    Story.showContent(req.params.ID_truyen, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found content with id ${req.params.ID_truyen}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving content with id " + req.params.ID_truyen
                });
            }
        } else res.send(data);
    })
}
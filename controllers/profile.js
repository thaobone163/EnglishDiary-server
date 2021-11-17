const Profile = require('../models/profile')

// Find a single Profile with a ID
exports.find = (req, res) => {
    Profile.findById(req.params.ID_nguoihoc, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Profile with id ${req.params.ID_nguoihoc}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Profile with id " + req.params.ID_nguoihoc
                });
            }
        } else res.send(data);
    });
};


exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const profile = new Profile({
        ID_nguoihoc: req.body.ID_nguoihoc,
        fullname: req.body.fullname,
        email: req.body.email,
        sdt: req.body.sdt,
        ngaysinh: req.body.ngaysinh,
        diachi: req.body.diachi

    });
    Profile.create(profile, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the profile."
            });
        else res.send(data);
    })
}

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Profile.update(new Profile(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Profile.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Profile"
                });
            }
        } else res.send(data);
    });
};
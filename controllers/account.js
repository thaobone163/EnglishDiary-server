const Account = require ('../models/account');

exports.find = (req, res) => {
    Account.findByUsername(req.params.tendangnhap, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Account with username ${req.params.tendangnhap}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Account with username " + req.params.tendangnhap
                });
            }
        } else res.send(data);
    });
}

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const account = new Account({
        ID_tk: req.body.ID_tk,
        tendangnhap: req.body.tendangnhap,
        matkhau: req.body.matkhau
    });
    Account.create(account, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Account."
            });
        else res.send(data);
    })
}
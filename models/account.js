const sql = require("./connection");

// constructor
const Account = function (account) {
   this.tendangnhap = account.tendangnhap;
   this.matkhau = account.matkhau;
   this.ID_tk = account.ID_tk;
}

Account.findByUsername = (tendangnhap, result) => {
    sql.query(`SELECT ID_tk, tendangnhap, matkhau FROM taikhoan WHERE tendangnhap = "${tendangnhap}"`, (err, res) =>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found username: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    })
};

Account.create = (newAccount, result) => {
    sql.query(`INSERT INTO taikhoan SET ?`, newAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created account: ", {id: res.insertId, ...newAccount});
        result(null, {id: res.insertId, ...newAccount});
    })
};

module.exports = Account;
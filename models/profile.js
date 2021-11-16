const sql = require("./connection");

// constructor
const Profile = function (profile) {
    this.ID_nguoihoc = profile.ID_nguoihoc;
    this.fullname = profile.fullname;
    this.email = profile.email;
    this.sdt = profile.sdt;
    this.ngaysinh = profile.ngaysinh;
    this.diachi = profile.diachi
};

Profile.findById = (ID_nguoihoc, result) => {
    sql.query(`SELECT ID_nguoihoc ,fullname, email, sdt, ngaysinh, diachi FROM nguoihoc WHERE ID_nguoihoc = "${ID_nguoihoc}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found profile: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found profile with the id
        result({kind: "not_found"}, null);
    });
};

Profile.create = (newProfile, result) => {
    sql.query(`INSERT INTO nguoihoc SET ?`, newProfile, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created profile: ", {id: res.insertId, ...newProfile});
        result(null, {id: res.insertId, ...newProfile});
    })
};

module.exports = Profile;
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
    sql.query(`SELECT ID_nguoihoc ,fullname, email, sdt, DATE_FORMAT(ngaysinh,"%Y-%m-%d") as ngaysinh, diachi FROM nguoihoc WHERE ID_nguoihoc = "${ID_nguoihoc}"`, (err, res) => {
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

Profile.update = (nguoihoc, result) => {
    sql.query(`UPDATE nguoihoc SET
        fullName = ?, email = ?, sdt = ?, ngaysinh = ?, diachi = ? WHERE ID_nguoihoc = ?`,
        [nguoihoc.fullname, nguoihoc.email, nguoihoc.sdt, nguoihoc.ngaysinh,
            nguoihoc.diachi, nguoihoc.ID_nguoihoc],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                // not found account with the id
                result({kind: "not_found"}, null);
                return;
            }

            console.log("updated profile: ", {...nguoihoc});
            result(null, {...nguoihoc});
        }
    );
}

module.exports = Profile;
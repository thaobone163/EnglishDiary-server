const sql = require("./connection")

//constructor
const Progress = function (progress) {
    this.ID =  progress.ID;
    this.ID_nguoihoc = progress.ID_nguoihoc;
    this.ID_baihoc = progress.ID_baihoc;
    this.trangthai = progress.trangthai;
};

Progress.showStatus = (ID_nguoihoc, ID_baihoc, result) => {
    sql.query(`SELECT trangthai
                FROM thamgia
                WHERE ID_nguoihoc = '${ID_nguoihoc}' AND ID_baihoc = '${ID_baihoc}'
                ORDER BY ID DESC
                LIMIT 1;`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found status: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found status with the id
        result({kind: "not_found"}, null);
    })
}

Progress.updateStatus = (newProgress, result) => {
    sql.query(`INSERT INTO thamgia SET?`, newProgress, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("update status: ", {id: res.insertId, ...newProgress});
        result(null, {id: res.insertId, ...newProgress});
    })
}

Progress.countDone = (ID_nguoihoc, result) => {
    sql.query(`SELECT chude.ID_kh, sum(thamgia.trangthai) as hasDone
               FROM thamgia 
               STRAIGHT_JOIN baihoc ON thamgia.ID_baihoc = baihoc.ID_baihoc
               STRAIGHT_JOIN chude ON chude.ID_chude = baihoc.ID_chude
               WHERE ID_nguoihoc = "${ID_nguoihoc}"
               GROUP BY chude.ID_kh`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found progress: ", res);
            result(null, res);
            return;
        }
        // not found progress with the id
        result({kind: "not_found"}, null);
    })
}

Progress.countALL = (result) => {
    sql.query(`SELECT chude.ID_kh, count(baihoc.ID_baihoc) as countAll
                FROM baihoc 
                JOIN chude ON chude.ID_chude = baihoc.ID_chude
                GROUP BY chude.ID_kh`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found: ", res);
            result(null, res);
            return;
        }
        // not found
        result({kind: "not_found"}, null);
    })
}
module.exports = Progress;
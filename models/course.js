const sql = require("./connection");

// constructor
const Course = function (course) {
    this.ID_khoahoc = course.ID_khoahoc;
    this.tenkhoahoc = course.tenkhoahoc;
    this.mota = course.mota;
    this.level = course.level;
};

Course.findById = (ID_khoahoc, result) => {
    sql.query(`SELECT mota FROM khoahoc WHERE ID_khoahoc = "${ID_khoahoc}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found course: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found course with the id
        result({kind: "not_found"}, null);
    });
};

module.exports = Course;
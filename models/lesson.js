const sql = require("./connection");

// constructor
const Lesson = function (lesson) {
    this.ID_baihoc = lesson.ID_baihoc;
    this.tenbai = lesson.tenbai;
    this.ID_chude = lesson.ID_chude;
};

// show all lesson in topic
Lesson.showAll = (ID_chude, result) => {
    sql.query(`SELECT tenbai
                FROM baihoc
                WHERE ID_chude = "${ID_chude}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found list of lesson: ", res);
            result(null, res);
            return;
        }

        // not found list of lessons with topic ID
        result({kind: "not_found"}, null);
    });
};

Lesson.findById = (ID_baihoc, result) => {
    sql.query(`SELECT tenbai FROM baihoc WHERE ID_baihoc = "${ID_baihoc}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found lesson: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found lesson with the id
        result({kind: "not_found"}, null);
    });
};

module.exports = Lesson;
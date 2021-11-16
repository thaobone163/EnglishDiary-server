const sql = require("./connection");

// constructor
const Vocabulary = function (vocabulary) {
    this.ID_tuvung = vocabulary.ID_tuvung;
    this.tu = vocabulary.tu;
    this.nghia = vocabulary.nghia;
    this.phat_am = vocabulary.phat_am;
    this.ID_baihoc = vocabulary.ID_baihoc;
};

// show all topic in course
Vocabulary.showAll = (ID_baihoc, result) => {
    sql.query(`SELECT tu, nghia, phat_am 
                FROM tuvung 
                WHERE ID_baihoc = "${ID_baihoc}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found list of vocabulary: ", res);
            result(null, res);
            return;
        }

        // not found list of vocabulary with lesson ID
        result({kind: "not_found"}, null);
    });
};

Vocabulary.search = (search, result) => {
    sql.query(`select tu, nghia, phat_am from tuvung where tu like '${search}%'`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found vocabulary: ", res);
                result(null, res);
                return;
            }

            // not found vocabulary
            result({kind: "not_found"}, null);
        }
    )
}

module.exports = Vocabulary;
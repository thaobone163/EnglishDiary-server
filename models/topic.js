const sql = require("./connection");

// constructor
const Topic = function (topic) {
    this.ID_chude = topic.ID_chude;
    this.tenchude = topic.tenchude;
    this.image = topic.image;
    this.ID_kh = topic.ID_kh;
};

// show all topic in course
Topic.showAll = (ID_kh, result) => {
    sql.query(`SELECT ID_chude, tenchude, image 
                FROM chude 
                WHERE ID_kh = "${ID_kh}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found list of topic: ", res);
            result(null, res);
            return;
        }

        // not found list of topics with course ID
        result({kind: "not_found"}, null);
    });
};

Topic.search = (search, ID_kh, result) => {
    sql.query(`select ID_chude, tenchude, image from chude where tenchude like '%${search}%' and ID_kh = '${ID_kh}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found topic: ", res);
            result(null, res);
            return;
        }

        // not found topic
        result({kind: "not_found"}, null);
    }
)
}

Topic.findById = (ID_chude, result) => {
    sql.query(`SELECT tenchude, image FROM chude WHERE ID_chude = "${ID_chude}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found topic: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found topic with the id
        result({kind: "not_found"}, null);
    });
};

module.exports = Topic;
const sql = require("./connection");

// constructor
const Story = function (story) {
    this.ID_truyen = story.ID_truyen;
    this.tentruyen = story.tentruyen;
    this.link = story.link;
    this.noidung = story.noidung;
    this.dich = story.dich;
    this.image = story.image;
    this.ID_chude = story.ID_chude;
};

Story.showAll = (result) => {
    sql.query(`SELECT ID_truyen, tentruyen, image 
                FROM truyen`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found list of story: ", res);
            result(null, res);
            return;
        }

        // not found list of story
        result({kind: "not_found"}, null);
    });
};

Story.search = (search, result) => {
    sql.query(`SELECT ID_truyen, tentruyen, image 
                FROM truyen where tentruyen like '%${search}%'`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found story: ", res);
                result(null, res);
                return;
            }

            // not found topic
            result({kind: "not_found"}, null);
        }
    )
}

Story.findByIdTopic = (ID_chude, result) => {
    sql.query(`SELECT ID_truyen, tentruyen, image FROM truyen WHERE ID_chude = "${ID_chude}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found story: ", res);
            result(null, res);
            return;
        }

        // not found story with the id
        result({kind: "not_found"}, null);
    });
};

Story.showContent = (ID_truyen, result) => {
    sql.query(`SELECT ID_truyen, tentruyen, link, noidung, dich 
                FROM truyen 
                WHERE ID_truyen = "${ID_truyen}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found content: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found content
        result({kind: "not_found"}, null);
    });
};

module.exports = Story;
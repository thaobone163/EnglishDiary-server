const sql = require("./connection");

// constructor
const Song = function (song) {
    this.ID_baihat = song.ID_baihat;
    this.tenbai = song.tenbai;
    this.loibaihat = song.loibaihat;
    this.baihat = song.baihat;
    this.image = song.image;
    this.ID_chude = song.ID_chude;
};

Song.showAll = (result) => {
    sql.query(`SELECT ID_baihat, tenbai, image 
                FROM baihat`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found list of songs: ", res);
            result(null, res);
            return;
        }

        // not found list of story
        result({kind: "not_found"}, null);
    });
};

Song.search = (search, result) => {
    sql.query(`SELECT ID_baihat, tenbai, image 
                FROM baihat where tenbai like '%${search}%'`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found song: ", res);
                result(null, res);
                return;
            }

            // not found topic
            result({kind: "not_found"}, null);
        }
    )
}

Song.findByIdTopic = (ID_chude, result) => {
    sql.query(`SELECT tenbai, image FROM baihat WHERE ID_chude = "${ID_chude}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found song: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found story with the id
        result({kind: "not_found"}, null);
    });
};

Song.showContent = (ID_baihat, result) => {
    sql.query(`SELECT ID_baihat, tenbai, baihat, loibaihat
                FROM baihat 
                WHERE ID_baihat = "${ID_baihat}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found content: ", res);
            result(null, res);
            return;
        }

        // not found content
        result({kind: "not_found"}, null);
    });
};

module.exports = Song;
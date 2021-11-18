const sql = require("./connection");

// constructor
const Video = function (video) {
    this.ID_video = video.ID_video;
    this.name = video.name;
    this.image = video.image;
    this.noidung = video.noidung;
    this.ID_chude = video.ID_chude;
};

Video.showAll = (result) => {
    sql.query(`SELECT ID_video, name, image 
                FROM video`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found list of video: ", res);
            result(null, res);
            return;
        }

        // not found list of story
        result({kind: "not_found"}, null);
    });
};

Video.search = (search, result) => {
    sql.query(`SELECT ID_video, name, image 
                FROM video where name like '%${search}%'`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found video: ", res);
                result(null, res);
                return;
            }

            // not found topic
            result({kind: "not_found"}, null);
        }
    )
}

Video.findByIdTopic = (ID_chude, result) => {
    sql.query(`SELECT ID_video, name, image FROM video WHERE ID_chude = "${ID_chude}"`, (err, res) => {
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

Video.showContent = (ID_video, result) => {
    sql.query(`SELECT ID_video, name, noidung
                FROM video 
                WHERE ID_video = "${ID_video}"`, (err, res) => {
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

module.exports = Video;
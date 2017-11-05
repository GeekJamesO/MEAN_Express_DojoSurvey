var mongoose = require('mongoose');
module.exports = (function() {
    return {
        index: function(req, res) {
            return res.render('index', { title: "This survey title" })
        },
        result: function(req, res) {
            console.log(req.body);
            req.session.Name = req.body.yourName;
            req.session.DojoLocation = req.body.dojoLocation;
            req.session.favLanguage = req.body.favLanguage;
            req.session.Comment = req.body.comment;
            return res.render("result", { session: req.session });
        }
    }
})()
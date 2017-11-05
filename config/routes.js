var survey = require("./../controllers/survey")

module.exports = function(app) {
    app.get('/', function(req, res) {
        survey.index(req, res);
    });
    app.post("/result", function(req, res) {
        survey.result(req, res);
    });
}
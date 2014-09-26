var ejs = require("ejs");
var fs = require("fs");
var path = require("path");

var template = ejs.compile(fs.readFileSync(path.join(__dirname,"template.ejs"),"utf-8"));

module.exports = function (options) {
    return function (options) {
        var snippet = template(options).replace("\n","").replace(/\s+/g," ");
        return function (req,res,next) {
            res.locals.piwik = function () {
                return snippet;
            }
            next()
        };
    }(options);
};

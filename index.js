var ejs = require("ejs");
var fs = require("fs");
var path = require("path");

var template = null;
fs.readFile(path.join(__dirname,"template.ejs"),"utf-8",function (err,data) {
    if (err) throw new Error(err);
    template = ejs.compile(data);
});

module.exports = function (options) {
    return function (options) {
        var snippet = template(options).replace("\n","").replace(/\s+/g," ");
        return function (req,res,next) {
            req.locals.piwik = function () {
                return snippet;
            }
        };
    }(options);
};

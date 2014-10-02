# Piwik Middleware
*Simplify Piwik integration in Express/Connect*
## Installation
Preferred via NPM:

	npm install piwik-middleware

## Usage
app.js

	var piwik = require("piwik-middleware");
	app.use(piwik({
	    piwikUrl: "piwik.example.com",
	    siteId: 1, // See Settings -> Websites in Piwik
	    trackPageView: true, // See Piwik documentation
	    linkTracking: true, // enableLinkTracking in Piwik
	}));
template.jade

	head
		!=piwik()
template.ejs

	<head>
		<%= piwik() %>
	</head>

## License
This module is under the MIT license. For the text, see LICENSE.

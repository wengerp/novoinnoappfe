/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"chnovobc/novoinnoapfe/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

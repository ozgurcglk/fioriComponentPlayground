/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["playground/test/integration/AllJourneys"
], function () {
	QUnit.start();
});

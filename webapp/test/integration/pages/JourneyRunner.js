sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"infobox2main/test/integration/pages/INFOBOX_DList.gen",
	"infobox2main/test/integration/pages/INFOBOX_DObjectPage.gen"
], function (JourneyRunner, INFOBOX_DListGenerated, INFOBOX_DObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('infobox2main') + '/test/flp.html#app-preview',
        pages: {
			onTheINFOBOX_DListGenerated: INFOBOX_DListGenerated,
			onTheINFOBOX_DObjectPageGenerated: INFOBOX_DObjectPageGenerated
        },
        async: true
    });

    return runner;
});


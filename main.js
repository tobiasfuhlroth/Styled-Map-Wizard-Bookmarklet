/**
 * Styled Map Wizard Bookmarklet
 * @author Tobias Fuhlroth - Notch Interactive GmbH
 */


require.config({
    paths: {
        'text': './text',
        'configurator': './configurator'
    }
});


require(['./mootools-core-1.4.5-full-nocompat-yc.js', 'configurator'], function (mootools, Configurator) {

    "use strict";

    window.addEvent('domready', function () {
        new Configurator();
    });

});
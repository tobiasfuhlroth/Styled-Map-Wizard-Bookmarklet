/**
 * Styled Map Wizard Bookmarklet
 * @author Tobias Fuhlroth - Notch Interactive GmbH
 */


require.config({
    paths: {
        'mootools': './mootools-core-1.4.5-full-nocompat-yc.js',
        'text': './text',
        'configurator': './configurator'
    }
});


require(['mootools', 'configurator'], function (mootools, Configurator) {

    "use strict";

    window.addEvent('domready', function () {
        new Configurator();
    });

});
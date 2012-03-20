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


require(['configurator'], function (Configurator) {

    "use strict";

    window.addEvent('domready', function () {
        new Configurator();
    });

});
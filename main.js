/**
 * Styled Map Wizard Bookmarklet
 * @author Tobias Fuhlroth - Notch Interactive GmbH
 */


console.log('Test');
require.config({
    paths: {
        'text': './text',
        'mootools': './mootools-core-1.4.5-full-nocompat-yc.js'
    }
});


require(['mootools', 'text'], function () {

    "use strict";

    window.addEvent('domready', function () {
        new Element('div', {
            'styles': {
                'width': 200,
                'height': 100,
                'background-color': 'red',
                'position': 'absolute',
                'left': 100,
                'top': 100,
                'z-index': 10000
            }
        }).inject($(document.body));
    });

});
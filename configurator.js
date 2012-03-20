/**
 * Configurator
 */


define(['text!configurator.html'], function (template) {

    "use strict";

    var Configurator = new Class({

        template: template,

        initialize: function () {
            this.build();
        },

        build: function () {
            this.container = new Element('div', {
                'id': 'smw-configurator-container',
                'html': this.template
            });
            this.container.inject($(document.body));
        }

    });

    return Configurator;

});
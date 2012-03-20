javascript: (function () {
    var script = document.createElement('script');
    script.src = 'http://tobiasfuhlroth.github.com/Styled-Map-Wizard-Bookmarklet/mootools-core-1.4.5-full-nocompat-yc.js';
    document.body.appendChild(script);

    var script = document.createElement('script');
    script.src = 'http://tobiasfuhlroth.github.com/Styled-Map-Wizard-Bookmarklet/require.js';
    script.setAttribute('data-main', 'http://tobiasfuhlroth.github.com/Styled-Map-Wizard-Bookmarklet/main');
    document.body.appendChild(script);
}());
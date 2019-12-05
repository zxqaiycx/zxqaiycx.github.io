MathJax = {
  options: {
    renderActions: {
      /* add a new named action not to override the original 'find' action */
      findScript: [10, function (doc) {
        for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
          const display = !!node.type.match(/; *mode=display/);
          const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
          const text = document.createTextNode('');
          node.parentNode.replaceChild(text, node);
          math.start = {node: text, delim: '', n: 0};
          math.end = {node: text, delim: '', n: 0};
          doc.math.push(math);
        }
      }, '']
    }
  },
  tex: {
    packages: ['base'],        // extensions to use
    inlineMath: [              // start/end delimiter pairs for in-line math
      ['$', '$'], 
      ['\\(', '\\)']
    ],
    displayMath: [             // start/end delimiter pairs for display math
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    processEscapes: true,      // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
    processRefs: true,         // process \ref{...} outside of math mode
  }
//   tex: {
//     packages: ['base'],        // extensions to use
//     inlineMath: [              // start/end delimiter pairs for in-line math
//       ['$', '$'], 
//       ['\\(', '\\)']
//     ],
//     displayMath: [             // start/end delimiter pairs for display math
//       ['$$', '$$'],
//       ['\\[', '\\]']
//     ],
//     processEscapes: true,      // use \$ to produce a literal dollar sign
//     processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
//     processRefs: true,         // process \ref{...} outside of math mode
//     digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
//                                // pattern for recognizing numbers
//     tags: 'none',              // or 'ams' or 'all'
//     tagSide: 'right',          // side for \tag macros
//     tagIndent: '0.8em',        // amount to indent tags
//     useLabelIds: true,         // use label name rather than tag for ids
//     multlineWidth: '85%',      // width of multline environment
//     maxMacros: 1000,           // maximum number of macro substitutions per expression
//     maxBuffer: 5 * 1024,       // maximum size for the internal TeX string (5K)
//     baseURL:                   // URL for use with links to tags (when there is a <base> tag in effect)
//        (document.getElementsByTagName('base').length === 0) ?
//         '' : String(document.location).replace(/#.*$/, ''))
//   }, 
//   chtml: {
//     scale: 1,                      // global scaling factor for all expressions
//     minScale: .5,                  // smallest scaling factor to use
//     matchFontHeight: true,         // true to match ex-height of surrounding font
//     mtextInheritFont: false,       // true to make mtext elements use surrounding font
//     merrorInheritFont: true,       // true to make merror text use surrounding font
//     mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
//     skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
//     exFactor: .5,                  // default size of ex in em units
//     displayAlign: 'center',        // default for indentalign when set to 'auto'
//     displayIndent: '0'             // default for indentshift when set to 'auto'
//   }
};

(function () {
//   document.querySelectorAll("script[type='math/tex']").forEach(function(el){
//     el.outerHTML = "\\(" + el.textContent + "\\)";
//   });
//   document.querySelectorAll("script[type='math/tex; mode=display']").forEach(function(el){
//     el.outerHTML = "\\[" + el.textContent + "\\]";
//   });
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();

window.diiOnLoad = window.diiOnLoad || function(fn) {
  var len;
  if (document.diiDomReady == 'true') {
    if (fn) {
      fn();
    }
    else {
      if (window.dii_on_load_functions) {
        len = window.dii_on_load_functions.length;
        for (var i=0;i < len; i++) {
          window.dii_on_load_functions[i]();
        }
        // deletes everything in the array once its been run
        window.dii_on_load_functions = [];
      }
    }
  }
  else {
    window.dii_on_load_functions = window.dii_on_load_functions || [];
    if (fn)
      window.dii_on_load_functions.push(fn);
  }
};
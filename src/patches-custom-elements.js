/*
 * Copyright 2013 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
(function() {

if (window.ShadowDOMPolyfill) {

  // ensure wrapped inputs for these functions
  var fns = ['upgradeAll', 'upgradeSubtree', 'observeDocument',
      'upgradeDocument'];

  // cache originals
  var original = {};
  fns.forEach(function(fn) {
    original[fn] = CustomElements[fn];
  });

  // override
  fns.forEach(function(fn) {
    CustomElements[fn] = function(inNode) {
      return original[fn](wrap(inNode));
    };
  });

}

})();

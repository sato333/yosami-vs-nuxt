const m = require('mithril');

/**
 * View of HelloController
 * @param {ApplicationController} controller Controller instance.
 * @param {object}                pipe       Pipe between views.
 * @param {object}                _yield     Rendering result upper view.
 * @return {object} Rendering result.
 */
module.exports = function(controller, pipe, _yield) {
  return (
<div class='controllers/hello'>
  <h1>Hello yosami!</h1>
</div>
  );
};

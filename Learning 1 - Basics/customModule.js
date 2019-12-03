exports.getWelcomeMessage = function() {
    return "Hi there, you created custom module.";
}

// Another way to export.
//  module.exports.getWelcomeMessage = getWelcomeMessage;

// Another way to export the function with different syntax.
// ** suitable for single function export file. **

// var getWelcomeMessage = function() {
//    return "Hi there, you created custom module.";
// }
// module.exports = getWelcomeMessage;

// How to injected in another application or js file.

// var injectedFunction = require(customModule);

// way to call the exported function.
// injectedFunction();
/**
 * Created by titusfortner on 11/23/16.
 */
var Page = require('./page');

var MenuPage = Object.create(Page, {
    a/**/rcsEntry: {
        get: function () {
            return browser.element(`~Arcs`);
        }
    }
});

module.exports = MenuPage;
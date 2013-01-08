/*
 * viewcollection
 * ViewCollection component
 *
 * @copyright 2012 Enrico Marino and Federico Spini
 * @license MIT
 */

/*
 * Expose `ViewCollection`
 */

module.exports = ViewCollection;

/*
 * Module dependencies
 */

var events = require('event-manager');
var delegates = require('delegate-manager');
var Collection = require('collection');

/*
 * ViewCollection
 * Create a viewcollection.
 *
 * @param {Object} options options
 * @param {Element} [options.el] element
 * @param {Collection} [options.collection] collection
 * @return {ViewCollection} a viewcollection
 */

function ViewCollection(options) {
  if (!(this instanceof ViewCollection)) {
    return new ViewCollection(options);
  }
  options = options || {};
  this.el = options.el || document.createElement('div');
  this.collection = options.collection || new Collection([]);
  this.events = delegates(this.el, this);
  this.messages = events(this.collection, this);
}
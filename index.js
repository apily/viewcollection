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

/*
 * ViewCollection
 * Create a viewcollection.
 *
 * @param {Element} el element
 * @param {Collection} collection collection
 * @return {ViewCollection} a viewcollection
 */

function ViewModel(el, collection) {
  if (!(this instanceof View)) return new View(el, collection);

  this.el = el;
  this.collection = collection;
  this.events = delegates(el, this);
  this.messages = events(collection, this);
}
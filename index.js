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
var ViewModel = require('viewmodel');

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
  this.collection.model = this.viewmodel;
  this.events = delegates(this.el, this);
  this.messages = events(this.collection, this);
  this.viewmodels = {};
}

/*
 * Define the viewmodel constructor
 */

ViewCollection.prototype.viewmodel = ViewModel;

/*
 * onadd
 * Add a viewmodel to this viewcollection
 * when a model is added to the binded collection
 *
 * @param {Model} model the added model
 * @api public
 */

ViewCollection.prototype.onadd = function(model) {
  var viewmodel = this.viewmodel({model: model});
  var id = viewmodel.id;
  var el = viewmodel.el;
  this.viewmodels[id] = viewmodel;
  this.el.appendChild(el);
};

/*
 * onremove
 * Remove a viewmodel from this viewcollection
 * when its model is removed from the binded collection
 *
 * @param {Model} model the removed model
 * @api public
 */

ViewCollection.prototype.onremove = function(model) {

};

var delegates = require('viewcollection');
var Collection = require('collection');

(function(){
  var el = document.getElementById('list-one');
  var collection = new Collection();
  var view = ViewCollection(el, collection);
  
}());
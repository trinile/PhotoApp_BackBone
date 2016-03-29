var Photos = Backbone.Collection.extend({

  model: Photo,

  initialize: function() {

  },

  addNewPhoto: function(url, imageTitle) {
    var photo = new Photo({'url': url, 'title': imageTitle});
    this.add(photo);
  }
});
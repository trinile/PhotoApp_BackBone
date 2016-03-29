var Photo = Backbone.Model.extend({

  defaults: {
    rating: 0,
    title: 'Image of Something Cool',
    url: photosData[1].url
  },

  initialize: function() {
  },

  // listens to a change in ratings!
  updateRating: function(rating) {
    this.set('rating', rating);
    // console.log('new rating ', this.get('rating'));
    //tiggers changeRating
    this.trigger('changeRating', this);
  },

  setCurrentPhoto: function() {
    // console.log('i was triggered on click');
    this.trigger('changeCurrentPhoto', this);
  }
});
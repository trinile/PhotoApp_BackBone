var AppView = Backbone.View.extend({


  initialize: function(params) {
    this.inputView = new InputView({collection: this.model.get('photos')});
    this.photosListView = new PhotoListView({ collection: this.model.get('photos') });
    this.photoDisplayView = new PhotoDisplayView({ model: this.model.get('currentPhoto') });

    this.model.on('change:currentPhoto', function(model) {
      // console.log('change current photo in app view');
      this.photoDisplayView.displayPhoto(model.get('currentPhoto')) }, this);
  },

  render: function() {
    var row = $('<div class="row container"></div>').append([this.photosListView.$el, this.photoDisplayView.$el]);
   return this.$el.html([
      this.inputView.$el,
      row
      // this.photosListView.$el,
      // this.photoDisplayView.$el
    ]);
  }

});
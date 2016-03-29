var AppModel = Backbone.Model.extend({
  //app model is a model of photos and a current photo set to display
  initialize: function(params) {
    //set property of current photo
    this.set('currentPhoto', new Photo());
    //set current photo upon event of changeCurrentPhoto
    params.photos.on('changeCurrentPhoto', function(photo) {
      this.set('currentPhoto', photo) },this);
  }

});


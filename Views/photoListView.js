var PhotoListView = Backbone.View.extend({

  tagName: 'ul',
  className: 'col-md-6',
  
  initialize: function() {
    this.collection.on('add', this.render, this);
    this.render();

  },

  render: function() {
     this.$el.children().detach();

    return this.$el.addClass('photoList').html('<h3>List of Photos</h3>').append(this.collection.map(function(photo) {
      return new PhotoListEntryView({ model: photo }).render();
    }));
  }

})
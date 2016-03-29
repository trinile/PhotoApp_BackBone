var PhotoListEntryView = Backbone.View.extend({
  //model is photo
  className: 'photoEntry',
  tagName: 'li',
  template: _.template('<%= title %>'),
  events: {
    click: function() {
      this.model.setCurrentPhoto();
    }
  },

  render: function(){
    var listEntry = this.template({ title: this.model.get('title')});
    // this.$el.text('I am a picture please click on me');
    // return this.$el;
    return this.$el.html(listEntry);
  }
})
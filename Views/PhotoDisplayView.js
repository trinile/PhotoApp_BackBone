var PhotoDisplayView = Backbone.View.extend({
  model: Photo,
  // el: 'div',
  className: 'col-md-6 col-md-4-offset',
  events: {
    'change .chooseRating': function(event) {
        event.preventDefault();
        var rating = $(event.currentTarget).val();
        // console.log('rating ', rating);
        // console.log('choose rating called');
        this.model.updateRating(rating);
        this.render();
    },
  },
  template: _.template('<div class="photoDisplay"><img class="photo" src =" <%= url %>" \
  width="500px" height="340px"><h4> <%= title %></h4> <span class="rating"> Rating of \
    <%= rating %> out of 5 stars </span><select class="chooseRating"> \
  <option selected>Choose Rating</option> \
  <option value="0">0</option> \
  <option value="1">1</option> \
  <option value="2">2</option> \
  <option value="3">3</option> \
  <option value="4">4</option> \
  <option value="5">5</option> \
  </select></div>'),

  initialize: function() {
    this.model.on('change', this.render, this);
    this.render();
  },

  displayPhoto: function(photo) {
    this.model = photo;
    if (!this.model) {
      this.model = {
        url: '#',
        rating: 0,
        title: 'No photo displayed'
      }
    }
    this.render();
  },

  render: function() {
    var photoDisplay = this.template({
      url: this.model.get('url'),
      title: this.model.get('title'),
      rating: this.model.get('rating')
    });
    return this.$el.html(photoDisplay);
  }
  
})
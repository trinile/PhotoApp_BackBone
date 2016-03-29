
var InputView = Backbone.View.extend({
  collection: Photos,
  // tagName: '<div>',
  className: 'submitPhoto',
  template: '<form class="form-inline">'+
  '<div class="form-group">' +
    '<label for="imageURL">Image URL</label>' +
    '<input type="text" class="form-control" id="imageURL" placeholder="Type in Image URL Here">' +
  '</div>' +
  '<div class="form-group">' +
    '<label for="imageTitle">Image Title</label>' +
    '<input type="text" class="form-control" id="imageTitle" placeholder="Type in Image Title Here">' +
  '</div>' +
  '<button type="submit" class="btn btn-default">Submit</button>' +
  '</form>',
  // template: '<input type="text" placeholder="type in url"></input><input type="submit" id="submit">Submit</input>',
  events: {
    'submit': 'handleSubmit'
    },
  initialize: function() {
    this.render();
    this.on('submit', this.handleSubmit, this);
  },

  render: function() {
   return this.$el.html(this.template);
  },
  //upon submission of image title & url, add to photos collection
  handleSubmit: function(event) {
    event.preventDefault();
    var imgTitle = $('[id="imageTitle"]').val();
    var imgURL = $('[id="imageURL"]').val();
    // console.log(imgTitle, imgURL);
    // event.value();
    // alert('submit');
    this.resetInput();
    this.addPhoto(imgURL, imgTitle);
  },

  addPhoto: function(url, title) {
    // console.log('calling add new photo');
    // console.log('url :', url, title);
    this.collection.addNewPhoto(url, title);
  },
  resetInput: function() {
    $('[id="imageURL"]').val("");
    $('[id="imageTitle"]').val("");
    $('#imageTitle').attr({placeholder: 'Type in Image URL Here'});
    $('#imageURL').attr({placeholder: 'Type in Image Title Here'});
  }
});







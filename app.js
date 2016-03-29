
$(function() {

var photos = new Photos(photosData);
var app = new AppModel({photos: photos});

// var photoList = new PhotoListView({collection: photos});
//model is app which has photos (collection and curent photo);
var appView = new AppView({model: app });
$('#app').append(appView.render());
// console.log(photoList.collection);
// $('#app').append(photoList.render());

});
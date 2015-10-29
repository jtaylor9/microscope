Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.methods({
  addPost: function (text1, text2) {
    Posts.insert({
      title: text1,
      url: text2
    });
  }
});
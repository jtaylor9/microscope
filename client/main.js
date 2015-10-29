Meteor.subscribe('posts');

Meteor.methods({
  addPost: function (text1, text2) {
    Posts.insert({
      title: text1,
      url: text2
    });
  }
});

/**
 * Created by jtayl_000 on 10/29/2015.
 */
Meteor.subscribe('posts');

Meteor.methods({
  addPost: function (text1, text2) {
    Meteor.insert({
      title: text1,
      url: text2
    });
  }
});
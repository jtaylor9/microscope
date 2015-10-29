/**
 * Created by jtayl_000 on 10/29/2015.
 */
var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];

Template.postsList.helpers({
  posts: function() {
    Meteor.call("addPost", this.title, this.url);
    //return Posts.find();
  }
});
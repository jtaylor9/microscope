/**
 * Created by jtayl_000 on 10/29/2015.
 */
Meteor.publish('posts', function() {
  return Posts.find();
});
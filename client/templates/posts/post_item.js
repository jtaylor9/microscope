/**
 * Created by jtayl_000 on 10/29/2015.
 */
Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
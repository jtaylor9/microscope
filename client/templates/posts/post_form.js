/**
 * Created by jtayl_000 on 10/29/2015.
 */
Template.post_form.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    Posts.insert({
      title: event.target.title.value,
      url: event.target.url.value
    });
  }

});
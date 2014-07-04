if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to testapp.";
  };

  Template.hello.events({
    'click input': function () {
      console.log('adding');
      Clans.insert({members: ['test1' + new Date().getTime()]});
      console.log('added');
    }
  });

  Template.hello.helpers({
    clans: function() {
      return Clans.find();
    }
  });

  Template.clanItem.helpers({
    clanName: function() {
      console.log('in clanName');
      console.log(Clans.find().fetch());
      return Clans.findOne(this._id).members;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}

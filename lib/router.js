Router.configure({
layoutTemplate: 'layout'
});
 
Router.map(function() {
this.route('tHome', {path: '/'});
this.route('Projects', {path: '/projects'});
this.route('tAbout', {path: '/about'});
});
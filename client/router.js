var DetailView = require('./detail/detailView.js')
var LoginView = require('./login/loginView.js')
var MainView = require('./main/mainView.js')
var ProfileView = require('./profile/profileView.js')

var Router = Backbone.Router.extend({

  routes: {
    "":                "main",    
    "profile":         "profile",  
    "login":           "login",
    "animal/:id":      "detail"
  },

  main(){
    var mainView = new MainView();
  },

  profile(){
    var profileView = new ProfileView();
  },

  login(){
    var loginView = new LoginView();
  },

  detail(id){
    var detailView = new DetailView();
  }
});

var router = new Router();

window.templateMap = {}
var files = ['detail', 'login', 'main', 'profile', 'gallery']
var promises = []

for(var file of files)promises.push(new Promise((resolve, reject) =>{
  $.get('./templates/' + file + 'Template.jade', (res) =>{
    resolve(res)
  })
}))

Promise.all(promises).then((results) =>{
  for(var i = 0; i < results.length; i++){
    templateMap[files[i]] = results[i]
  }
}).then(() =>{
  Backbone.history.start()
})
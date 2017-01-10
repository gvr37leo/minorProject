(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var DetailView = Backbone.View.extend({
    el:"#main",

    initialize:function(){
        this.render();
    },

    render: function () {
        this.$el.html(jade.compile(templateMap.detail)({}))
         
    },
});

module.exports = DetailView
},{}],2:[function(require,module,exports){
var LoginView = Backbone.View.extend({
    el:"#main",

    initialize:function(){
        this.render();
    },

    render: function () {
        this.$el.html(jade.compile(templateMap.login)({}))
         
    },
});

module.exports = LoginView
},{}],3:[function(require,module,exports){
var AnimalView = Backbone.View.extend({
    initialize:function(){
        this.render();
    },

    render: function () {
        this.$el.html(jade.compile(templateMap.main)({}))
         
    },
});

module.exports = AnimalView
},{}],4:[function(require,module,exports){
var AnimalView = require('./animal/animalView')

var MainView = Backbone.View.extend({
    el:"#main",

    initialize:function(){
        this.render();
    },

    render: function () {
        this.$el.html(jade.compile(templateMap.main)({}))
         
    },
});

module.exports = MainView
},{"./animal/animalView":3}],5:[function(require,module,exports){
var GalleryView = Backbone.View.extend({

    initialize:function(){
        this.render();
    },

    render: function () {
        this.$el.html(jade.compile(templateMap.gallery)({}))
    },
});

module.exports = GalleryView
},{}],6:[function(require,module,exports){
var GalleryView = require('./gallery/galleryView')

var ProfileView = Backbone.View.extend({
    el:"#main",

    initialize:function(){
        this.render();
    },

    render: function () {
        this.$el.html(jade.compile(templateMap.profile)({}))
        var galleryContainer = this.el.querySelector('#gallery')
        var gallerys = [1,2,3]
        for(var gallery of gallerys){
            var galleryView = new GalleryView()
            galleryContainer.appendChild(galleryView.el)
        }
    },
});

module.exports = ProfileView
},{"./gallery/galleryView":5}],7:[function(require,module,exports){
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
},{"./detail/detailView.js":1,"./login/loginView.js":2,"./main/mainView.js":4,"./profile/profileView.js":6}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvbm9kZWpzNjMvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXRhaWwvZGV0YWlsVmlldy5qcyIsImxvZ2luL2xvZ2luVmlldy5qcyIsIm1haW4vYW5pbWFsL2FuaW1hbFZpZXcuanMiLCJtYWluL21haW5WaWV3LmpzIiwicHJvZmlsZS9nYWxsZXJ5L2dhbGxlcnlWaWV3LmpzIiwicHJvZmlsZS9wcm9maWxlVmlldy5qcyIsInJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgRGV0YWlsVmlldyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcclxuICAgIGVsOlwiI21haW5cIixcclxuXHJcbiAgICBpbml0aWFsaXplOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kZWwuaHRtbChqYWRlLmNvbXBpbGUodGVtcGxhdGVNYXAuZGV0YWlsKSh7fSkpXHJcbiAgICAgICAgIFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERldGFpbFZpZXciLCJ2YXIgTG9naW5WaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG4gICAgZWw6XCIjbWFpblwiLFxyXG5cclxuICAgIGluaXRpYWxpemU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRlbC5odG1sKGphZGUuY29tcGlsZSh0ZW1wbGF0ZU1hcC5sb2dpbikoe30pKVxyXG4gICAgICAgICBcclxuICAgIH0sXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMb2dpblZpZXciLCJ2YXIgQW5pbWFsVmlldyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcclxuICAgIGluaXRpYWxpemU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRlbC5odG1sKGphZGUuY29tcGlsZSh0ZW1wbGF0ZU1hcC5tYWluKSh7fSkpXHJcbiAgICAgICAgIFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1hbFZpZXciLCJ2YXIgQW5pbWFsVmlldyA9IHJlcXVpcmUoJy4vYW5pbWFsL2FuaW1hbFZpZXcnKVxyXG5cclxudmFyIE1haW5WaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG4gICAgZWw6XCIjbWFpblwiLFxyXG5cclxuICAgIGluaXRpYWxpemU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRlbC5odG1sKGphZGUuY29tcGlsZSh0ZW1wbGF0ZU1hcC5tYWluKSh7fSkpXHJcbiAgICAgICAgIFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5WaWV3IiwidmFyIEdhbGxlcnlWaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG5cclxuICAgIGluaXRpYWxpemU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRlbC5odG1sKGphZGUuY29tcGlsZSh0ZW1wbGF0ZU1hcC5nYWxsZXJ5KSh7fSkpXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FsbGVyeVZpZXciLCJ2YXIgR2FsbGVyeVZpZXcgPSByZXF1aXJlKCcuL2dhbGxlcnkvZ2FsbGVyeVZpZXcnKVxyXG5cclxudmFyIFByb2ZpbGVWaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG4gICAgZWw6XCIjbWFpblwiLFxyXG5cclxuICAgIGluaXRpYWxpemU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRlbC5odG1sKGphZGUuY29tcGlsZSh0ZW1wbGF0ZU1hcC5wcm9maWxlKSh7fSkpXHJcbiAgICAgICAgdmFyIGdhbGxlcnlDb250YWluZXIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJyNnYWxsZXJ5JylcclxuICAgICAgICB2YXIgZ2FsbGVyeXMgPSBbMSwyLDNdXHJcbiAgICAgICAgZm9yKHZhciBnYWxsZXJ5IG9mIGdhbGxlcnlzKXtcclxuICAgICAgICAgICAgdmFyIGdhbGxlcnlWaWV3ID0gbmV3IEdhbGxlcnlWaWV3KClcclxuICAgICAgICAgICAgZ2FsbGVyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChnYWxsZXJ5Vmlldy5lbClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZVZpZXciLCJ2YXIgRGV0YWlsVmlldyA9IHJlcXVpcmUoJy4vZGV0YWlsL2RldGFpbFZpZXcuanMnKVxyXG52YXIgTG9naW5WaWV3ID0gcmVxdWlyZSgnLi9sb2dpbi9sb2dpblZpZXcuanMnKVxyXG52YXIgTWFpblZpZXcgPSByZXF1aXJlKCcuL21haW4vbWFpblZpZXcuanMnKVxyXG52YXIgUHJvZmlsZVZpZXcgPSByZXF1aXJlKCcuL3Byb2ZpbGUvcHJvZmlsZVZpZXcuanMnKVxyXG5cclxudmFyIFJvdXRlciA9IEJhY2tib25lLlJvdXRlci5leHRlbmQoe1xyXG5cclxuICByb3V0ZXM6IHtcclxuICAgIFwiXCI6ICAgICAgICAgICAgICAgIFwibWFpblwiLCAgICBcclxuICAgIFwicHJvZmlsZVwiOiAgICAgICAgIFwicHJvZmlsZVwiLCAgXHJcbiAgICBcImxvZ2luXCI6ICAgICAgICAgICBcImxvZ2luXCIsXHJcbiAgICBcImFuaW1hbC86aWRcIjogICAgICBcImRldGFpbFwiXHJcbiAgfSxcclxuXHJcbiAgbWFpbigpe1xyXG4gICAgdmFyIG1haW5WaWV3ID0gbmV3IE1haW5WaWV3KCk7XHJcbiAgfSxcclxuXHJcbiAgcHJvZmlsZSgpe1xyXG4gICAgdmFyIHByb2ZpbGVWaWV3ID0gbmV3IFByb2ZpbGVWaWV3KCk7XHJcbiAgfSxcclxuXHJcbiAgbG9naW4oKXtcclxuICAgIHZhciBsb2dpblZpZXcgPSBuZXcgTG9naW5WaWV3KCk7XHJcbiAgfSxcclxuXHJcbiAgZGV0YWlsKGlkKXtcclxuICAgIHZhciBkZXRhaWxWaWV3ID0gbmV3IERldGFpbFZpZXcoKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuXHJcbndpbmRvdy50ZW1wbGF0ZU1hcCA9IHt9XHJcbnZhciBmaWxlcyA9IFsnZGV0YWlsJywgJ2xvZ2luJywgJ21haW4nLCAncHJvZmlsZScsICdnYWxsZXJ5J11cclxudmFyIHByb21pc2VzID0gW11cclxuXHJcbmZvcih2YXIgZmlsZSBvZiBmaWxlcylwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xyXG4gICQuZ2V0KCcuL3RlbXBsYXRlcy8nICsgZmlsZSArICdUZW1wbGF0ZS5qYWRlJywgKHJlcykgPT57XHJcbiAgICByZXNvbHZlKHJlcylcclxuICB9KVxyXG59KSlcclxuXHJcblByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChyZXN1bHRzKSA9PntcclxuICBmb3IodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICB0ZW1wbGF0ZU1hcFtmaWxlc1tpXV0gPSByZXN1bHRzW2ldXHJcbiAgfVxyXG59KS50aGVuKCgpID0+e1xyXG4gIEJhY2tib25lLmhpc3Rvcnkuc3RhcnQoKVxyXG59KSJdfQ==

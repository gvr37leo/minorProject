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
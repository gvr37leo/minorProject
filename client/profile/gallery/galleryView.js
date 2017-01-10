var GalleryView = Backbone.View.extend({

    initialize:function(){
        this.render();
    },

    render: function () {
        this.$el.html(jade.compile(templateMap.gallery)({}))
    },
});

module.exports = GalleryView
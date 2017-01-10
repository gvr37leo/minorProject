var AnimalView = Backbone.View.extend({
    initialize:function(){
        this.render();
    },

    render: function () {
        this.$el.html(jade.compile(templateMap.main)({}))
         
    },
});

module.exports = AnimalView
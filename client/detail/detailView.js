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
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
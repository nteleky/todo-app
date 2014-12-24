var app = app || {};

app.TodoListView = Backbone.View.extend({
    el: '#todoapp',

    statsTemplate: _.template( $('#stats-template').html()),

    //Bind relevant events on todos collection
    initialize: function() {
        this.allCheckbox = this.$('#toggle-all')[0];
        this.$input = this.$('#new-todo');
        this.$footer = this.$('#footer');
        this.$main = this.$('#main');

        this.listenTo(app.Todos, 'add', this.addOne);
        this.listenTo(app.Todos, 'reset', this.addAll);
    },

    //Add a single todo item to the list by creating a view
    //for it and appending its element to the <ul>.
    addOne: function(todo) {
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
    },

    addAll: function() {
        this.$('#todo-list').html('');
        app.Todos.each(this.addOne, this);
    }
});
//Todo Model
// A todo has two attributes: title and a completed status.

var app = app || {};

app.Todo = Backbone.Model.extend({
    //Default attributes to ensure that a todo has 'title' and 'completed' keys.

    defaults: {
        title: '',
        completed: false
    },

    // Toggle the 'completed' state of the todo item
    toggle: function() {
        this.save({
            completed: !this.get('completed')
        });
    }
});
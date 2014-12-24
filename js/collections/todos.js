
var app = app || {};

//Todo Collection
//Backed by Backbone.LocalStorage instead of a remote server.

var TodoList = Backbone.Collection.extend({

    model: app.todo,
    localStorage: new Backbone.LocalStorage('todos-backbone'),

    //Filter the list of all todos to those that have been completed.
    completed: function() {
        return this.filter(function(todo) {
            return todo.get('completed') === true;
        });
    },

    //Filter list of all todos to those that haven't been completed.
    remaining: function() {
        return this.filter(function(todo) {
            return todo.get('completed') === false;
        });
    }
});
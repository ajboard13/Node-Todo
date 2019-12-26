var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(res, req) {

        //seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: ' test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn NodeJS',
                isDone:false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}
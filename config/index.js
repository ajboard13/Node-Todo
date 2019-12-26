var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        var connectionString = 'mongodb+srv://' 
        + configValues.uname + ':' 
        + configValues.pass + 
        '@node-todo-lx5vf.mongodb.net/test?retryWrites=true&w=majority';

        console.log(connectionString);
        return connectionString;
    }
}
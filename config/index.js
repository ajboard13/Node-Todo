var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        var connectionString = 'mongodb://' 
        + configValues.uname + ':' 
        + configValues.pass + 
        '@node-todo-shard-00-00-lx5vf.mongodb.net:27017,node-todo-shard-00-01-lx5vf.mongodb.net:27017,node-todo-shard-00-02-lx5vf.mongodb.net:27017/test?ssl=true&replicaSet=Node-Todo-shard-0&authSource=admin&retryWrites=true&w=majority';

        console.log(connectionString);
        return connectionString;
    }
}

//mongodb://<username>:<password>@node-todo-shard-00-00-lx5vf.mongodb.net:27017,node-todo-shard-00-01-lx5vf.mongodb.net:27017,node-todo-shard-00-02-lx5vf.mongodb.net:27017/test?ssl=true&replicaSet=Node-Todo-shard-0&authSource=admin&retryWrites=true&w=majority
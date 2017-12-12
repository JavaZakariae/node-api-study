module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'root',
            password : 'secret8780',
            database : 'node_api'
        }
    },
    production: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'root',
            password : 'secret8780',
            database : 'node_api'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
}

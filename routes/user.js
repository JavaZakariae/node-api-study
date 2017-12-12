const controller = require('../controllers/users');

module.exports = [
    {
        method: 'GET',
        path:'/users',
        config: controller.getAll
    },
    {
        method: 'GET',
        path:'/users/{id}',
        config: controller.get
    },
    {
        method: 'POST',
        path:'/users',
        config: controller.create
    },
    {
        method: 'PUT',
        path: '/users/{id}',
        config: controller.update
    }
]

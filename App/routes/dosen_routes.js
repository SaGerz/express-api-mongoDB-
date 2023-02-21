module.exports = app => {
    const dosenController = require('../controllers/dosen_controller');
    const routes = require('express').Router();

    routes.get('/', dosenController.findAll);
    routes.get('/:id', dosenController.show);
    routes.post('/', dosenController.create);
    routes.put('/:id', dosenController.update);
    routes.delete('/:id', dosenController.delete);

    app.use('/dosen', routes);
}


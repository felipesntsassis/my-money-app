const express = require('express');
const auth = require('./auth');

module.exports = function (server) {

    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    protectedApi.use(auth);

    /** Rotas Protegidas */
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(protectedApi, '/billingCycles');

    /** Rotas Públicas */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const AuthService = require('../api/user/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validateToken', AuthService.validateToken);
};
const express = require('express');
const router = express.Router();

['GET', 'POST', 'PUT', 'DELETE'].forEach((method) => {
    router[method.toLowerCase()]('/category', (req, res) => {
        console.log(req.body);
        res.status(200).json(`${method} category`);
        
    });
});



module.exports = router;

// const express = require('express');
// const router = express.Router();
// const routes = require('./client_routes.json');
// // const middleware = require('./middleware');

// for (const routeKey in routes) {
//   const routeMethods = routes[routeKey];
//   for (const method in routeMethods) {
//     const path = `/${routeKey}`;
//     const routeInfo = routeMethods[method];
//     const { controller, checkLogin, checkAdmin } = routeInfo;
//     const [controllerName, methodName] = controller.split('.');
//     const controllerInstance = require(`../controllers/${controllerName}`);
//     const handler = controllerInstance[methodName];

//     // Áp dụng middleware dựa trên các cờ checkLogin và checkAdmin
//     const middlewareStack = [];
//     // if (checkLogin) {
//     //   middlewareStack.push(middleware.authenticateUser);
//     // }
//     // if (checkAdmin) {
//     //   middlewareStack.push(middleware.checkAdmin);
//     // }

//     // Đăng ký route với middleware
//     router[method](path, ...middlewareStack, handler);
//   }
// }

// module.exports = router;

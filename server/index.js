import { create, router as _router, defaults } from "json-server"; // importing json-server library
const server = create();
const router = _router("db.json");
const middlewares = defaults();
const port =  8080; 

server.use(middlewares);
server.use(router);

server.listen(port);
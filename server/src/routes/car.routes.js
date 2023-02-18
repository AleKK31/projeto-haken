import { create, get, getId, update, del, getParms } from "../controllers/car.controller.js";

const carRoutes = app => {
    app.post("/car", create);
    app.get("/car", get);
    app.get("/car/:id", getId);
    app.get("/car/find", getParms);
    app.put("/car/:id", update);
    app.patch("/car/:id", update);
    app.delete("/car/:id", del);
    
};

export default carRoutes;
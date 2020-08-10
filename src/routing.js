
import { clientController } from "./controllers/clientController"

// @ts-ignore
export const routing = (app) => {


    // client
    app.post('/client', clientController.save)
    app.get('/client', clientController.findAll)
    app.get('/client/:id', clientController.findById)
    app.delete('/client/:id', clientController.deleteById)

}
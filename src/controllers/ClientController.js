import { clientService } from "../services/clientService";

class clientController {

    save(req, res){
        console.log("TEST")
        const body = req.body
        clientService.save(req.body).then(data => {
            res.json(data)
        })
    }

    //Trouver tous les clients
    findAll(req, res){
        clientService.findAll().then(data => {
            res.json(data)
        })
    }

    //Trouver par ID
    findById(req, res){
        const id = req.params.id;
        clientService.findById(id).then(data => {
            return res.json(data)
        })
    }

    //Supprimer par ID
    /*
res= réponse,
raq= requête
    */
    deleteById(req, res){
        clientService.deleteById(req.params.id).then(ok=>{
            res.send("OK")
        }, err => {
            res.sendStatus(404)
        })
    }
}

export const clientController = Object.freeze(new clientController())
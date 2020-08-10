import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    date: Date,
    // heure: Time,
});

const clientModel = mongoose.model('client', clientSchema)

class clientRepository {
    save(client) {
        return new clientModel(client).save()
    }

    //Trouver tous les clients
    findAll() {
        return clientModel.find().exec()
    }

    //Trouver par ID
    findById(id) {
        return clientModel.findById(id).exec()
    }

    //Supprimer par ID
    deleteById(id) {
        return clientModel.deleteOne({ _id: id }).exec()
    }
}

export const clientRepository = Object.freeze(new clientRepository())
import { clientRepository } from "../repositories/clientRepository";

class clientService {

    save(client) {
        client.createdAt = Date.now()
        return clientRepository.save(client)
    }

    //Trouver tous les Clients
    findAll() {
        return clientRepository.findAll()
    }

    //Trouver par ID
    findById(id) {
        return clientRepository.findById(id)
    }

    //Surppimer par ID
    deleteById(id) {
        return clientRepository.deleteById(id)
    }

}

export const clientService = Object.freeze(new clientService())
const fs = require('fs')
const path = require('path')

// Caminho para o arquivo JSON onde os dados serão armazenados
const filePath = path.join(__dirname, 'app.json')

class App {
    constructor(name, image, description, about) {
        this.name = name
        this.image = image
        this.description = description
        this.about = about
    }

    static getAll() {
        if (!fs.existsSync(filePath)) {
            return []
        }
    
        const data = fs.readFileSync(filePath);
        const parsedData = JSON.parse(data);
    
        
        if (!Array.isArray(parsedData)) {
            return Object.values(parsedData)
        }
    
        return parsedData
    }
    

    // Encontrar um usuário pelo nome
    static findByName(name) {
        const apps = App.getAll()
        return apps.find(app => app.name === name)
    }

    static instantiate(name) {
        const appData = App.findByName(name)

        if (appData) {
            return new App(appData.name, appData.image, appData.description, appData.about)
        }

        return null
    }
}

module.exports = App

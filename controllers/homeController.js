const App = require ('../models/App')

module.exports = class homeController{
    static async showHome(req, res){
        const apps = App.getAll()

        res.render('home', {apps})
    }
}
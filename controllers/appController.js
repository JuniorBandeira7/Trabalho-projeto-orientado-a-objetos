const App = require ('../models/App')

module.exports = class appController{
    static async app(req, res){
        const appName = req.params.name

        const app = App.findByName(appName)

        res.render('app', {app})
    }
}
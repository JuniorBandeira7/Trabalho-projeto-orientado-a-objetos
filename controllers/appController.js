const App = require ('../models/App')

module.exports = class appController{
    static async app(req, res){
        const appName = req.params.name

        const app = App.findByName(appName)

        if(!app){
            res.render('404')
        }


        res.render('app', {app})
    }
}
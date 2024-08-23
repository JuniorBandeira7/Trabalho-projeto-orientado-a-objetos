const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const App = require('./models/App')
const appRoutes = require('./routes/appRoutes')
const homeRoutes = require('./routes/homeRoutes')

const hbs = exphbs.create({
    helpers: {
        eachLimit: function(context, limit, options) {
            let result = '';
            let keys = Object.keys(context); // Obtenha as chaves do objeto

            for (let i = 0; i < Math.min(limit, keys.length); i++) {
                let key = keys[i];
                result += options.fn(context[key]);
            }

            return result;
        }
    }
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.use('/', homeRoutes)
app.use('/app', appRoutes)

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})

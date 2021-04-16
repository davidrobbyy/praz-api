<<<<<<< HEAD
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter)
app.use('/api', apirouter)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
=======
module.exports = {
	Nulis: require('./utils/nulis'),
	Vokal: require('./utils/vokal'),
	Base: require('./utils/base'),
	Searchnabi: require('./utils/kisahnabi'),
        Gempa: require('./utils/gempa')
}
>>>>>>> a4126d19a4ee3ec90ac93a0611e396f82a2bed93

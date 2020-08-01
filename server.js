//--------------------------require statments
const express = require("express")
const methodOverride = require("method-override")
const app = express()
const router = express.Router()
const eventsController = require('./controllers/events')
const futureEventsController = require('./controllers/futureEvents')
require('./db/db')

//--------------------------middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

//--------------------------routes
app.get('/', (req, res) => {
    res.render('home.ejs')
})

// ----------Events Routes
app.use('/events', eventsController)
app.use('/futureEvents', futureEventsController)


app.listen(3000, () => {
    console.log("Events on port 3000")
});

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// define path for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// set handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicPath))

// route index, /help, dan /about tidak perlu dibuat karena ud pakai express static file. 

// app.com
// app.get('', (req, res) => {
//   res.send({title: 'Hello Express'})
// })

// app.com/help
// app.get('/help', (req, res) => {
//   res.send({title: 'Help'})
// })

// app.com/about
// app.get('/about', (req, res) => {
//   res.send({title: 'About'})
// })

// render the hbs views using handlebars template(view) engine
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Ardian Tirta',
    location: 'Jakarta'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Ardian Tirta',
    location: 'Jakarta'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'Ask us anything.',
    name: 'Ardian Tirta'
  })
})

// app.com/weather
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'not gonna raining',
    location: 'Jakarta'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errMsg: 'Help article not found',
    name: 'Ardian Tirta'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errMsg: 'Page not found',
    name: 'Ardian Tirta'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})

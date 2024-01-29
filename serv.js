const express = require('express')
const app = express()

app.get('/',(req,res) => {

    console.log('Peticion recibida')
    res.send('HOLA MUNDO')
})

app.listen(4000, () => {
    console.log(`Servidor escucha en el puerto 4000`)
    
      }) 
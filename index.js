const express = require('express')



const app = express()

const port = 5000

app.use(express.json())

// ***************************Routes************************
app.get('/', (req, res) => {
    res.send("Hello :)")
})


// ******************Start Listening**************************
app.listen(port, () => {
    console.log("Server is running on port", port)
})


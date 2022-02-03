const express = require('express')
app = express()

let autot=[
    {
        id:1,
        merkki:"Toyota",
        malli:"Corolla"
    },
    {
        id:2,
        merkki:"volkswagen",
        malli:"malli"
    },
    {
        id:3,
        merkki:"Citroen",
        malli:"C2"
    }
]
app.get('/api/autot',(req,res)=>{
    res.json(autot)
    }
)

/*app.get('/api/autot/:id',function (req,res){
    let id = req.params.id;
    autot.forEach(element => {
        if (element.id == id){
            res.json(element);
            return;
        }
    });
})*/

/*app.get('/api/autot/:id',function (req,res){
    let id = req.params.id;
    let auto = autot.find(auto => auto.id==id)
    res.json(auto)
})*/
// app.delete('/api/autot/:id',function (req,res){
//     let id = Number(req.params.id);
//     autot = autot.splice(id)
//     res.status(200).end()
// })

app.delete('/api/autot/:id',function (req,res){
    let id = Number(req.params.id);
    autot = autot.filter(auto => auto.id!=id)
    res.status(200).end()
})

const PORT = 3001
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    }
)
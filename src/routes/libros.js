const{Router,request}=require('express');
const router = Router();
const _ =require('underscore');

const data=require('../libros.json');


//consultar 
router.get('/',(req,res)=>{ 
res.json(data);
});

//insertat post 
router.post('/', (req,res)=>{
const{detalle, precio, estado}=req.body;
if(detalle && precio && estado){
    const id= data.length + 1;
    const newLibro={...req.body, id};
    data.push(newLibro);
    res.json(data);
}
else{
    res.status(500).json({"error":"ha ocurrido un error"});
}
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { detalle, precio, estado } = req.body;
    if (id && detalle && precio && estado) {
        _.each(data, (libros, i) => {
            if (libros.id == id) {
                libros.detalle = detalle;
                libros.precio = precio;
                libros.estado = estado;
                
            }
        });
        res.json(data);
    }
    else {
        res.status(500).json({ "error": "There was an error." });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(data, (libros, i) => {
        if (libros.id == id) {
            data.splice(i, 1);
        }
    });
    res.send(data);
})

module.exports = router;
const {Router}=require('express');
const router=Router();


//raiz 
router.get('/', (req, res) => {    
    res.json({
        "hola":"prueba index"
    });
})


module.exports = router;


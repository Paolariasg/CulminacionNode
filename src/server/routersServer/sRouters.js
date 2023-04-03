const {Router} = require ('express');
const router = Router()

const dato = [
    {
        "id" : 1,
        "titulo" : "Super Mario Bros",
        "genero" : "Plataformas",
        "año_lanzamiento" : 1985,
        "desarrolladora" : "Nintendo"
    },
    {
        "id" : 2,
        "titulo" : "The Legenf of Zelda: Breath of the Wild",
        "genero" : "Aventura",
        "año_lanzamiento" : 2017,
        "desarrolladora" : "Nintendo"
    },
    {
        "id" : 3,
        "titulo" : "Grand Theft Auto v",
        "genero" : "Accion-Aventura",
        "año_lanzamiento" : 2013,
        "desarrolladora" : "Rockstar North"
    },
    {
        "id" : 4,
        "titulo" : "Minecraft",
        "genero" : "Sandbox",
        "año_lanzamiento" : 2011,
        "desarrolladora" : "Mojang Studios"
    },
];

router.get('/api', (req,res)=>{
    res.send(dato);
})

router.post('/api', (req,res)=>{
    dato.push(req.body)
    res.send(dato);
})

module.exports = router;

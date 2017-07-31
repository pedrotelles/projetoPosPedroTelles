const express = require('express')
const low = require('lowdb');
const router = express.Router();
const db = low('db.json')
var count = 1
db.defaults({  user: [],produtos:[],tipoProduto:[] }).write()

db.set('produtos',[{ id: 1, nome: 'Rosquinha Tradicional',descricao:"Rosquinha recheada com o doce sabor de casa",link:"http://img.itdg.com.br/tdg/images/recipes/000/008/602/30668/30668_original.jpg?mode=crop&width=370&height=278",idTipo:"1",preco:12.50,estoque:10},
                   { id: 2, nome: 'Rosquinha Vulcão',descricao:"Rosquinha recheada com muito mais chocolate e creme",link:"http://img.itdg.com.br/tdg/images/recipes/000/008/602/30668/30668_original.jpg?mode=crop&width=370&height=278",idTipo:"1",preco:12.50,estoque:10},
                   { id: 3, nome: 'Rosquinha de Chocolate',descricao:"Rosquinha com sabor do brigadeiro mais trufado...",link:"http://img.itdg.com.br/tdg/images/recipes/000/008/602/30668/30668_original.jpg?mode=crop&width=370&height=278",idTipo:"1",preco:12.50,estoque:10},
                   { id: 4, nome: 'Biscoito de Maizena',descricao:"Biscoito de Maizena Tradicional",link:"https://t2.rg.ltmcdn.com/pt/images/6/7/3/img_bolacha_de_maizena_1376_paso_3_600.jpg",idTipo:"2",preco:4.50,estoque:10},
                   { id: 5, nome: 'Biscoito de Maizena com Coco',descricao:"Biscoito de Maizena com Coco Tropical",link:"http://img.itdg.com.br/tdg/images/recipes/000/190/742/274554/274554_original.jpg?mode=crop&width=150&height=130",idTipo:"2",preco:4.50,estoque:10},
                   { id: 6, nome: 'Biscoito de Aveia',descricao:"Biscoito de Aveia Tradicional",link:"http://img.itdg.com.br/tdg/images/recipes/000/191/877/279095/279095_original.jpg?mode=crop&width=370&height=278",idTipo:"2",preco:4.50,estoque:10},])
                   .write()
db.set('tipoProduto',[{ id: 1,nomeTipo:"Rosquinhas"},{ id: 2,nomeTipo:"Biscoitos"}]).write()


router.get('/produtos', (request, response) => {

    response.json(

      db.get("produtos")

    );
});
router.get('/produtos/:id', (request, response) => {

    response.json(

      db.get("produtos").filter({idTipo:request.params.id})

    );
});
router.get('/tipos', (request, response) => {

    response.json(

      db.get("tipoProduto")

    );
});

router.post('/user',(request, response) => {
    var nome = req.body.name;
    var email = req.body.email;
    var user = req.body.user;
    var password = req.body.password;
    db.get('user')
  .push({ nome:nome,usuario:user,senha:password,email:email,ativo:'1'})
  .write()

});
router.post('/login',(request, response) => {
    var nome = req.body.name;
    var email = req.body.email;
    var user = req.body.user;
    var password = req.body.password;
    db.get('user').find({usuario:user}).assign({ title: 'hi!'}).write()
    response.json(db.get('user').find({usuario:user}));

});

module.exports = router;

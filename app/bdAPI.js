const express = require('express')
const low = require('lowdb');
const router = express.Router();
const db = low('db.json')
db.defaults({ posts: [], user: [],produtos:[],tipoProduto:[] }).write()

db.set('produtos',[{ id: 1, nome: 'Rosquinha Tradicional',descricao:"Rosquinha recheada com o doce sabor de casa",link:"http://img.itdg.com.br/tdg/images/recipes/000/008/602/30668/30668_original.jpg?mode=crop&width=370&height=278",idTipo:"1",preco:12.50,estoque:10},
                   { id: 2, nome: 'Rosquinha Vulcão',descricao:"Rosquinha recheada com muito mais chocolate e creme",link:"http://img.itdg.com.br/tdg/images/recipes/000/008/602/30668/30668_original.jpg?mode=crop&width=370&height=278",idTipo:"1",preco:12.50,estoque:10},
                   { id: 3, nome: 'Rosquinha de Chocolate',descricao:"Rosquinha com sabor",link:"http://img.itdg.com.br/tdg/images/recipes/000/008/602/30668/30668_original.jpg?mode=crop&width=370&height=278",idTipo:"1",preco:12.50,estoque:10},
                   { id: 4, nome: 'Biscoito de Maizena',descricao:"Biscoito de Maizena Tradicional",link:"https://t2.rg.ltmcdn.com/pt/images/6/7/3/img_bolacha_de_maizena_1376_paso_3_600.jpg",idTipo:"2",preco:4.50,estoque:10},
                   { id: 5, nome: 'Biscoito de Maizena com Coco',descricao:"Biscoito de Maizena com Coco Tropical",link:"http://img.itdg.com.br/tdg/images/recipes/000/190/742/274554/274554_original.jpg?mode=crop&width=150&height=130",idTipo:"2",preco:4.50,estoque:10},
                   { id: 6, nome: 'BISCOITO DE AVEIA',descricao:"Biscoito de Aveia Tradicional",link:"http://img.itdg.com.br/tdg/images/recipes/000/191/877/279095/279095_original.jpg?mode=crop&width=370&height=278",idTipo:"2",preco:4.50,estoque:10},])
                   .write()
db.set('tipoProduto',[{ id: 1,nomeTipo:"Rosquinhas"},{ id: 2,nomeTipo:"Biscoitos"},{ id: 3,nomeTipo:"Pão de Mel"}]).write()
 
router.get('/', (request, response) => {

    response.json(

      db.get('posts')
        .find({ id: 1 })
        .value()

    );
});






module.exports = router;

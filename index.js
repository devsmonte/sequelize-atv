(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();


    try {
        const novoProduto = await Produto.create({
            nome: 'Caneta Preta2',
            preco: 5.0,
            descricao: 'Caneta esferografica cristal2'
        })
        console.log(novoProduto);
        console.log('conectado com sucesso!')
    } catch (error) {
        console.log(error.message);
    }



})();
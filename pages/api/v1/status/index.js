function status (request,response){
    response.status(200).json({chave: "TESTE DE ENDPOINT" });

}

export default status;
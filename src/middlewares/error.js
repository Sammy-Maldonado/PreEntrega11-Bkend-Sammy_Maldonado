//Genero el error para el cliente
export default (error, req, res, next) => {
  console.log(error);

  switch (error.status) {
    case 400:
      req.logger.http("Error 400 - Bad Request");
      res.status(error.status).send({status:"error", error:error.message});
      break;
    
    case 500:
      req.logger.fatal("Error 500 - Internal Server Error");
      res.status(error.status).send({status:"error", error:error.message});
      break;
  }
}
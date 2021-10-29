const db = require('../db/connection')

function deletePass(id, ans){
    db.conexao.query(`DELETE FROM x WHERE x = '${id}' ;`, function (error, results, fields) {
        if (error) return ans("RESET FAIL");
        return ans("RESET SUCESS");
      });  
  }

function buscaCPF(cpf, ans){
    db.conexao.query(`SELECT * FROM x WHERE x = '${cpf}' ;`, function (error, results, fields) {
        if (error) throw error;

        if(results[0])return ans(results[0]);
        else return ans(0);
      });  
  }

  function buscaID(id, ans){
    db.conexao.query(`SELECT * FROM x WHERE x = '${id}' ;`, function (error, results, fields) {
        if (error) throw error;
        if(results[0])return ans(results[0]);
        else return ans(0);
      });  
  }

module.exports = {
    buscaID : buscaID,
    buscaCPF : buscaCPF,
    reset : deletePass
}
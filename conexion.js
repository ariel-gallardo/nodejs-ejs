const MySQL = require('mysql')

const Pool = MySQL.createPool({
    user: 'laboratorioiv',
    password: 'laboratorioiv',
    database: 'labo4_tp4',
})

const Consulta = function(consulta){
    
    return new Promise(function(resolve,reject){
        Pool.getConnection(function(err,connection){
            if(err) reject(err)
            connection.query(consulta,function(err,result){
                if(err) reject(err)
                resolve(result)
            })
        })
    })

}

module.exports = {
    Consulta
}
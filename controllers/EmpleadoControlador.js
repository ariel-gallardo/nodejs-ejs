const Path = require('path')
const Conexion = require(Path.resolve('conexion'))

function vistaFormularioCrear(req, res){
    return res.render('formularioCrear')
}

function vistaFormularioModificar(req, res){
    Conexion.Consulta(`SELECT * FROM empleados WHERE legajo = ${req.params.legajo}`).then( empleado => {
        return res.render('formularioModificar',{empleado: empleado[0]})
    })
}

function crearEmpleado(req, res){
    let {legajo, apellido, nombre, dni, sector, fechaingreso, activo} = req.body
    Conexion.Consulta(`INSERT INTO empleados VALUES(
         ${legajo},
        '${apellido}',
        '${nombre}',
         ${dni},
        '${sector}',
        '${fechaingreso}',
         ${activo}
    )`).then(data => {
        res.redirect('/')
    }).catch( error => {
        res.redirect(500,'/') 
    })
}

function ModificarEmpleado(req, res){
    let {legajo, apellido, nombre, dni, sector, fechaingreso, activo} = req.body
    Conexion.Consulta(`UPDATE empleados SET
     legajo='${legajo}',
      apellido='${apellido}',
       nombre='${nombre}',
        dni=${dni},
         sector='${sector}',
          fechaingreso='${fechaingreso}',
           activo=${activo}
            WHERE legajo = ${req.params.legajo}`).then(
                res.redirect('/')
            ).catch(error => console.error(error))
}

function BorrarEmpleado(req, res){
    Conexion.Consulta(`DELETE FROM empleados WHERE legajo = ${req.params.legajo}`).then(
        res.redirect('/')
    ).catch(res.redirect(500,'/'))
}

function ListarEmpleados(req, res){
    Conexion.Consulta('SELECT * FROM empleados').then(
        empleados => { return res.render('listaEmpleados',{empleados: empleados})}
    )
}

module.exports = {
    Lista: ListarEmpleados,
    Nuevo: vistaFormularioCrear,
    Registrar: crearEmpleado,
    Edicion: vistaFormularioModificar,
    Modificar: ModificarEmpleado,
    Borrar: BorrarEmpleado
}
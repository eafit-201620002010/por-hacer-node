const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca el estado de la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: descripcion // Redundante
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}
const chokidar = require('chokidar');

const watcher = chokidar.watch('/home/ariel/Música', {ignored: /^\./, persistent: true});

watcher
  .on('add', function(path) {archivoAgregado(path)})
  .on('change', function(path) {archivoModificado(path)})
  .on('unlink', function(path) {archivoBorrado(path)})
  .on('error', function(error) {errorHandler(error)})

function archivoAgregado(path){
    console.log('El archivo:', path, 'fue añadido'); 
    
}

function archivoModificado(path){
    console.log('El archivo:', path, 'fue cambiado');
}

function archivoBorrado(path){
    console.log('El archivo:', path, 'fue borrado');
}

function errorHandler(path){
    console.error('Ocurrio un error', error);
}
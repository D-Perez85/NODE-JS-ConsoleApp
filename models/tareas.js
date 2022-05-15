const Tarea = require('./tarea');

/** REFERENCIA DE LA BUSQUEDA
 *  _listado:
 *      {  'uuid-123712-123123-2: { id:12, desc:asd,completadoeEN:92231 }  },
 */

class Tareas {
//LIST OF TAREAS
    _listado = {};

   constructor() {
        this._listado = {};
    }
}



module.exports = Tareas;

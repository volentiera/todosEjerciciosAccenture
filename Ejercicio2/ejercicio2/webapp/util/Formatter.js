sap.ui.define([], function (){
    'use strict';
    return{
        algo: function(alguito){
            switch (alguito) {
                case 1:
                    return "Mouse";
                case 2:
                    return "Monitor";
                case 3:
                    return "Impresora";
                default:
                    return "Otro";
            }
        }

    };
}, true)
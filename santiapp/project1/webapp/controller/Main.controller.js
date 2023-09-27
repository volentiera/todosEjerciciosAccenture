
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.project1.controller.Main", {
            algos: function () {
                alert("Hola Mundo desde el botón.");
            }  
        });
    });

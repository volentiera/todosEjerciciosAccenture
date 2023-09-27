sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    // "sap/ui/model/Filter",
    // "sap/ui/model/FilerOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("ejercicio4.controller.Main", {
            onInit: function () {
                const sPath = jQuery.sap.getModulePath("ejercicio4") + "/localService/Empresas.JSON"
                const oModel1 = new JSONModel(sPath);
                oModel1.loadData(sPath);
                this.getView().setModel(oModel1, "algo")
            }
        });
    });

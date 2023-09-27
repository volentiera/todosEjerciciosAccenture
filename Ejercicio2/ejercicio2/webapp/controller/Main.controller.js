sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/ejercicio/ejercicio2/util/Constants",
    "com/ejercicio/ejercicio2/util/Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Constants, Formatter) {
        "use strict";

        return Controller.extend("com.ejercicio.ejercicio2.controller.Main", {
            Formatter: Formatter,
            onInit: function () {
                const algo = Formatter.algo(1)
                console.log(algo)
                const oModel1 = new JSONModel({ number1: 1 });
                const oModel2 = new JSONModel({ number2: 2 });
                const oResultModel = new JSONModel({ result: 0 });
    
                this.getView().setModel(oModel1, Constants.model.inputModel);
                this.getView().setModel(oModel2, "input2model");
                this.getView().setModel(oResultModel, "resultModel");
                var oResourceModel = this.getOwnerComponent().getModel("i18n");
                    // oResourceModel.enhance({ bundleName: "com.ejercicio.i18n.i18n" });
                    // sap.ui.getCore().getConfiguration().setLanguage("en");
            },
            sumar: function () {
                const oModel1 = this.getView().getModel("input1model");
                const oModel2 = this.getView().getModel("input2model");
                const oResultModel = this.getView().getModel("resultModel");
    
                const value1 = parseInt(oModel1.getProperty("/number1")) || 0;
                const value2 = parseInt(oModel2.getProperty("/number2")) || 0;
                
                const sum = parseInt(value1 + value2);
                oResultModel.setProperty("/result", sum);
            }
        });
    });

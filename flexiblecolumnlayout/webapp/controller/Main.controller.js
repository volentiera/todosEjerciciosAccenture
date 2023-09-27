sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/LayoutType",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, LayoutType, JSONModel) {
        "use strict";

        return Controller.extend("flexiblecolumnlayout.controller.Main", {
            onInit: function() {
                var oModel = new JSONModel({
                    layout: LayoutType.OneColumn
                });
                this.getView().setModel(oModel, "layoutModel");
            },
    
            onNavToBegin: function() {
                var oModel = this.getView().getModel("layoutModel");
                oModel.setProperty("/layout", LayoutType.OneColumn);
            },
            
            onNavToMid: function() {
                var oModel = this.getView().getModel("layoutModel");
                oModel.setProperty("/layout", LayoutType.TwoColumnsMidExpanded);
            },
            
            onNavToEnd: function() {
                var oModel = this.getView().getModel("layoutModel");
                oModel.setProperty("/layout", LayoutType.ThreeColumnsMidExpanded);
            }
        });
    });

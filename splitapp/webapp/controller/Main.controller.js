sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("splitapp.controller.Main", {
            onInit: function() {
            },
            switchToDetailPage2: function() {
                var oSplitApp = this.getView().byId("mySplitApp");
                oSplitApp.toDetail(this.getView().byId("detailPage2"));
            },
    
            switchToDetailPage1: function() {
                var oSplitApp = this.getView().byId("mySplitApp");
                oSplitApp.toDetail(this.getView().byId("detailPage1"));
            },
            closeDetail: function() {
                this.getView().byId("mySplitApp").backDetail();
            }
        });
    });

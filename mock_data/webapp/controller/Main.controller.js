sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("mockdata.controller.Main", {
            setDark: function () {
                const currentTheme = sap.ui.getCore().getConfiguration().getTheme();
                const newTheme = currentTheme === "sap_fiori_3_dark" ? "sap_fiori_3" : "sap_fiori_3_dark";
                sap.ui.getCore().applyTheme(newTheme);
                const button = this.byId("themeButton");
                if (currentTheme === "sap_fiori_3_dark") {
                    button.setIcon("sap-icon://dark-mode");
                } else {
                    button.setIcon("sap-icon://light-mode");
                }
            },
            onSearch: function (oEvent) {
                let aFilters = [];
                let aFilters2 = [];
                let sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    let filterId = new Filter("ProductsID", FilterOperator.EQ, sQuery);
                    aFilters.push(filterId);
                    let filterName = new Filter("Name", FilterOperator.Contains, sQuery);
                    aFilters.push(filterName);
                    let filterPrice = new Filter("Price", FilterOperator.EQ, sQuery);
                    aFilters.push(filterPrice);
                    aFilters2 = new Filter(aFilters, false);
                }
                let oList = this.byId("idTableProductos");
                let oBinding = oList.getBinding("items");
                oBinding.filter(aFilters2, "Application");
            },
            onInit: function () {
                let sPath = jQuery.sap.getModulePath("mockdata") + "/localService/Products.JSON"
                let oModel1 = new JSONModel(sPath);
                oModel1.loadData(sPath);
                this.getView().setModel(oModel1, "nombreModelo")
                var oModel = new JSONModel({
                    icon: "sap-icon://dark-mode"
                });
                this.getView().setModel(oModel, "iconModel");
            }
        });
    });

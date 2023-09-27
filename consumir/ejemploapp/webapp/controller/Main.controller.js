sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("ejemploapp.controller.Main", {
            onInit: function () {
                const url = sap.ui.require.toUrl("ejemploapp") + "/northwind/northwind.svc/"
                this._model = new sap.ui.model.odata.v2.ODataModel(url,{
                    json: true,
                    headers: {
                        "DataServiceVersion": "2.0",
                        "Cache-Control": "no-cache, no-store",
                        "Pragma": "no-cache"
                    },
                    useBatch: true
                })
                this._model.read("/Products",{
                    async: true,
                    success: jQuery.proxy(this.success, this),
                    error: jQuery.proxy(this.error, this)
                })
            },
            success: function(oData){
                const oModel = new JSONModel(oData.results)
                this.getView().setModel(oModel, "productsModel")
            } ,
            error: function(error){
                console.log(error)
            },
            onItemPress: function(oEvent){
                const oItem = oEvent.getSource().getBindingContext("productsModel")
                const sPath = oItem.getPath()

                const selectedProduct = this.getView().getModel("productsModel").getProperty(sPath);

                const selectedProductModel = new JSONModel(selectedProduct);

                

                this.getOwnerComponent().getRouter().navTo("RouteProduct")
                this.getView().setModel(selectedProductModel, "selectedProductModel");
                this.getOwnerComponent().setModel(selectedProductModel, "selectedProductModel")
            }

        });
    });

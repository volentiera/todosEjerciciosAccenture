sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("project1.controller.Main", {
            onPress: function () {
                let oView = this.getView();
                if(!this.oFragment){
                    Fragment.load({
                        id: oView.getId(),
                        name: "project1.fragments.fragmento",
                        controller: this
                    }).then(function(oDialog){
                        this.oFragment = oDialog;
                        this.getView().addDependent(this.oFragment);
                        this.oFragment.open();
                    }.bind(this))
                    return;
                }else{
                    this.oFragment.open();
                }
            },
            navTo: function(){
                this.getOwnerComponent().getRouter().navTo("RouteOther")
            }
        });
    });

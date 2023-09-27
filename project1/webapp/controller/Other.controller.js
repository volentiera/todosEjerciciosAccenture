sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "project1/util/Commons"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Commons ) {
        "use strict";

        return Controller.extend("project1.controller.Other", {
            navBack: function(){
                Commons.navBack()
            }
        });
    });

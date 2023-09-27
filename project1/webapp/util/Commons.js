sap.ui.define(["sap/ui/core/routing/History",], function (History){
    
    'use strict';
    const Commons = {
        navBack: function(){
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();
            
            if (sPreviousHash !== undefined){
                window.history.go(-1);
            }else{
                this.getOwnerComponent().getRouter().navTo("App", {}, true)
            }
        }
    }
    return Commons
}, true)
sap.ui.define([
	"sap/ui/core/UIComponent"
	], function (UIComponent){
		"use strict";
		return UIComponent.extend("opensap.myapp.Component", {
			metadata: {
				manifest: "json"
			},
			
			init: function(){
				//call init of parent
				UIComponent.prototype.init.apply(this, arguments);
				
				//switching off batch mode for odata calls
				this.getModel().setUseBatch(false);
				
				//additional initialization is done here
			}
		});
	});
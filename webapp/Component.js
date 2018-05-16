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
				
				//additional initialization is done here
			}
		});
	});
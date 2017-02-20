define(
  [
    'jquery',
	"css!./legend.css"
  ],
//Please check the spellings of the keywords always
  function( $ , cssContent) {
    'use strict';
    return {
        definition : {
              type: "items",
              component :  "accordion",
              items:  {
       
                    appearance : {
                      uses : "settings",

                    }
                    /*,
                    presentation : {
                      uses: "presentation"
                    }*/

              }
        },

       paint : function( $element, layout){
         

			$element.empty();

		var measureName = ['Budget', 'Actual'],
        background_color = [ '#447788', '#CC6677']		; 
	    var legend = '\
					<div class="legend" id="' + layout.qInfo.qId + '">';
		var columnWidth	= '148' ;		
		for (var i=0; i<measureName.length; i++) {
				legend += '<div class="column" style="font-size:12px' +';width:'+ columnWidth + 'px' +'"><div class="box" style="background-color:'+ background_color[i]  +'"></div>'+ measureName[i] + '</div>';
				}
				legend += '<br></br>';
				legend += '\
				\
				</div>';
        //console.log(document.getElementById(layout.qInfo.qId) ) ;
         console.log(document.getElementById(layout.qInfo.qId)) ;
		 //alert(layout);
         $element.html(legend);
       }
    };
  }
);

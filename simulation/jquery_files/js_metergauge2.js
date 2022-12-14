
		$(document).ready(function(){
		   s12 = [0];
		   plot2 = $.jqplot('chart2',[s12],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 3,
					   intervals:[0, 0.75, 1.5, 2.25 , 3],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter2(){
		s12[0] = parseFloat(document.getElementById('A').value); 
		plot2 = $.jqplot('chart2',[s12],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 3,
					   intervals:[0, 0.75, 1.5, 2.25 , 3],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

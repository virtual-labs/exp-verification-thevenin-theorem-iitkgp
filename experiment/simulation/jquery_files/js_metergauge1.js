
		$(document).ready(function(){
		   s11 = [0];
		   plot1 = $.jqplot('chart1',[s11],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 200,
					   intervals:[0, 50, 100, 150 , 200],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter1(){
		s11[0] = parseFloat(document.getElementById('V').value);
		plot1 = $.jqplot('chart1',[s11],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 200,
					   intervals:[0, 50, 100, 150 , 200],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}

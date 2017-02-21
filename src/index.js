'use strict';

(function() {
  var Chart = window.Chart;
  console.log(Chart.helpers)
  var eventPlugin = {
   beforeInit: function(chartInstance) {
    this.chart = chartInstance
    this.chart.on = function (element, event, listener) {
      this.chart.config.options[element].callbacks[event] = listener
    }
    this.chart.off = function (element, event) {
      this.chart.config.options[element].callbacks[event] = Chart.helpers.noop
    }
  }
}

Chart.plugins.register(eventPlugin);
}());

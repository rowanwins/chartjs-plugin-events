# Chartjs-plugin-events
Simple methods for watching events from chartjs
 [DEMO](https://rowanwins.github.io/chartjs-plugin-events/example/)
## Installation
```bash
npm install chart.js --save
```

## Sample usage
```js
  chart.on('tooltips','tooltipClosed', function(element) {
    console.log('we were closed', element)
  });
```

## License

Chart.js is available under the [MIT license](http://opensource.org/licenses/MIT).

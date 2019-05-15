<template>
  <div>
    <highcharts :options="chartOptions"
    ></highcharts>
  </div>
</template>

<script>
  export default {
    props: {
      states: Array
    },
    name: "userChart",
    created() {
      let views = [];
      const diff = require('deep-diff');
                                                            // ошибка интервала
      for (let i = 1; i < this.states.length; i++) {
        let view = {};
        view.id = i;
        const pastState = this.states[i - 1];
        const currentState = this.states[i];
        view.x = new Date(+currentState.timeStamp);
        const changes = diff(pastState, currentState);
        view.color = 'grey';
        if (changes.length > 0) {
          view.label = "There are " + changes.length + " changes";
          view.name = "There are " + changes.length + " changes";
        } else {
          view.label = "There are no changes";
          view.name = "There are no changes";
        }
        view.description = 'description';
        views.push(view);
        this.chartOptions.series[0].data = views;
      }
    },
    data() {
      return {
        changes: [],
        chartOptions: {
          chart: {
            zoomType: 'x',
            type: 'timeline'
          },
          xAxis: {
            type: 'datetime',
            visible: true
          },
          yAxis: {
            gridLineWidth: 1,
            title: null,
            labels: {
              enabled: false
            }
          },
          legend: {
            enabled: false
          },
          title: {
            text: 'Timeline of Space Exploration'
          },
          subtitle: {
            text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>'
          },
          tooltip: {
            style: {
              width: 300
            }
          },
          plotOptions: {
            series: {
              cursor: 'pointer',
              point: {
                events: {
                  click: function (e) {
                    this.$emit('currentStateIdChanged', e.point.id);
                  }.bind(this)
                }
              }
            }
          },
          series: [{
            dataLabels: {
              allowOverlap: false,
              format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                '{point.x:%d %b %Y}</span><br/>{point.label}',
              distance: 100,
            },
            marker: {
              symbol: 'diamond'
            },
            data: []
          }]
        }
      }
    }
  };
</script>
<style>
  #container {
    min-width: 320px;
    max-width: 500px;
    margin: 0 auto;
  }
</style>

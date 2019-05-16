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
      for (let i = 0; i < this.states.length; i++) {
        let view = {};
        view.id = i;
        const currentState = this.states[i];
        view.x = new Date(+currentState.timeStamp);
        if (i > 0) {
          const pastState = this.states[i - 1];
          const changes = diff(pastState, currentState);
          view.label = "There are " + changes.length + " changes";
          view.name = "There are " + changes.length + " changes";
          view.color = 'green';
          for (const change of changes) {
            if (change.kind != 'E' && change.path[0] != 'original') {
              view.color = 'red';
            }
          }
        } else {
          view.label = "There are no changes";
          view.name = "There are no changes";
          view.color = 'grey';
        }
        // view.description = 'description';
        views.push(view);
      }
      this.chartOptions.series[0].data = views;
    },
    data() {
      return {
        notImportantChangesPaths: [],
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
            text: 'Timeline of Profile Changes'
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
            cropThreshold: 1000000,
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

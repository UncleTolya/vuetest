<template>
  <div>
    <highcharts :options="chartOptions"
    ></highcharts>
  </div>
</template>

<script>
  import ChangeTypeEnum from '../enums/changeTypeEnum';

  export default {
    props: {
      states: Array
    },
    mixins: [ChangeTypeEnum],
    name: "userChart",
    methods: {
      getColor(changes) {
        const colors = [];
        for (const change of changes) {
          if (change.kind === this.ChangeType.EDITED.TITLE) {
            colors.push(this.ChangeType.EDITED);
          }else if (change.kind === this.ChangeType.NEW.TITLE) {
            colors.push(this.ChangeType.NEW);
          }else if (change.kind === this.ChangeType.DELETED.TITLE) {
            colors.push(this.ChangeType.DELETED);
          }else if (change.kind === this.ChangeType.ARRAY.TITLE) {
            colors.push(this.ChangeType.ARRAY);
          }
        }
        return colors.sort((a, b) => b.PRIORITY - a.PRIORITY)[0].COLOR;
      }
      ,
      getDataView() {
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
            view.color = this.getColor(changes);
          } else {
            view.color = this.ChangeType.EMPTY.COLOR;
            view.label = "There are no changes";
            view.name = "There are no changes";
          }
          // view.description = 'description';
          views.push(view);
        }
        return views;
      }
    },
    created() {
      this.chartOptions.series[0].data = this.getDataView();
    },
    data() {
      return {
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

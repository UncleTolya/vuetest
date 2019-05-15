<template>
  <div>
    <highcharts :options="chartOptions"
    ></highcharts>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array
    },
    name: "userChart",
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
                    console.log(this);
                    console.log(e.point.id);
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
            data: [{
              id: 0,
              x: Date.UTC(1951, 5, 22),
              color: 'red',
              name: 'First dogs in space',
              label: 'First dogs in space',
              description: "Dezik and Tsygan were the first dogs to make a sub-orbital flight on 22 July 1951. Both dogs were recovered unharmed after travelling to a maximum altitude of 110 km."
            }, {
              id: 2,
              x: Date.UTC(1951, 5, 22),
              name: 'First artificial satellite',
              label: 'First artificial satellite',
              description: "Sputnik 1 was the first artificial Earth satellite. The Soviet Union launched it into an elliptical low Earth orbit on 4 October 1957, orbiting for three weeks before its batteries died, then silently for two more months before falling back into the atmosphere."
            }, {
              id: 1,
              x: Date.UTC(1951, 5, 23),
              name: 'First artificial satellite to reach the Moon',
              label: 'First artificial satellite to reach the Moon',
              description: "Luna 1 was the first artificial satellite to reach the Moon vicinity and first artificial satellite in heliocentric orbit."
            }, {
              id: 3,
              x: Date.UTC(1961, 3, 12),
              name: 'First human spaceflight',
              label: 'First human spaceflight',
              description: "Yuri Gagarin was a Soviet pilot and cosmonaut. He became the first human to journey into outer space when his Vostok spacecraft completed one orbit of the Earth on 12 April 1961."
            },
              {
              id: 4,
              x: Date.UTC(1998, 10, 20),
              name: 'First multinational space station',
              label: 'First multinational space station',
              description: "The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000.[7] It has been inhabited continuously since that date."
            }]
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

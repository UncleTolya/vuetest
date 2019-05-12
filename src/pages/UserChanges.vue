<template>
    <div>
      <h2>Changes: </h2>
      <pre style="font-size: 20px">
        <div v-for="c in getChanges">
          <div v-html="showChange(c)"></div>
        </div>
      </pre>
    </div>

</template>

<script>
  export default {
    name: "UserChanges",
    props: ['fingerPrints', 'pos'],
    computed: {
      getChanges() {
        let changes = {};
        const diff = require('deep-diff');
        if (this.pos > 0 ) {
          const last = this.fingerPrints[this.pos - 1];
          const current = this.fingerPrints[this.pos];
          changes = diff(last, current);
        }
        return changes;
      },
    },
    methods: {
      showChange(change) {
        if (change.length === 0) return "empty";
        let resultHTML = '';
        let kind = change.kind;
        switch (kind) {
          case 'A':
            resultHTML += '<h3 style="color: blue;">Change occurred within an array</h3>';
            resultHTML += '<h3>Where: ';
            change.path.forEach(path => resultHTML += path + " ");
            resultHTML += '</h3><br>';
            resultHTML += '<h3>Index: ' + change.index + '</h3>';
            resultHTML += '<h3>' + this.showChange(change.item) +  '</h3>';
            break;
          case 'E':
            resultHTML += '<h3 style="color: limegreen;">Property/element was edited</h3><br>' ;
            resultHTML += '<h3>Where: ';
            change.path.forEach(path => resultHTML += path + " ");
            resultHTML += '</h3><br>';
            resultHTML += '<h3 style="color: grey; text-decoration: line-through">Old value: ' + change.lhs + '</h3><br>'
            resultHTML += '<h3>New value: ' + change.rhs + '</h3>'
            break;
          case 'N':
            resultHTML += '<h3 style="color: gold;">Newly added property/element</h3>';
            resultHTML += '<h3>Where: ';
            change.path.forEach(path => resultHTML += path + " ");
            resultHTML += '<h3>New value: ' + change.rhs + '</h3>'
            resultHTML += '</h3><br>';
            break;
          case 'D':
            resultHTML += '<h3 style="color: darkred;">Property/element was deleted</h3>';
            resultHTML += '<h3>Where: ';
            change.path.forEach(path => resultHTML += path + " ");
            resultHTML += '</h3><br>';
            resultHTML += '<h3 style="color: grey; text-decoration: line-through">Old value: ' + change.lhs + '</h3><br>'
            break;
        }
        return resultHTML;
      }
    }
  }
</script>

<style scoped>

</style>

<template>
    <div>
      <h2>There are {{ getChanges.length }} changes:</h2>
      <pre style="font-size: 20px">
        <div v-for="c in getChanges">
          <div v-html="showChange(c)"></div>
        </div>
      </pre>
    </div>

</template>

<script>
  import UserService from '../../mixins/userService.js';
  import ChangeTypeEnum from '../../enums/changeTypeEnum';

  export default {
    name: "UserChanges",
    props: {
      states: Array,
      currentStateId: Number,
      user: Object
    },
    mixins: [UserService,
      ChangeTypeEnum],
    computed: {
      getChanges() {
        let changes = {};
        const diff = require('deep-diff');
        if (this.currentStateId > 0 ) {
          const last = this.states[this.currentStateId - 1];
          const current = this.states[this.currentStateId];
          changes = diff(last, current);
        }
        return changes;
      },
    },
    methods: {
      showChange(change) {
        if (change.length === 0) return "empty";
        let resultHTML = '';
        switch (change.kind) {
          case this.ChangeType.ARRAY.TITLE:
            resultHTML += '<h3 style="color: pink;">Change occurred within an array</h3>';
            resultHTML += '<h3>Where: ';
            change.path.forEach(path => resultHTML += path + " ");
            resultHTML += '</h3><br>';
            resultHTML += '<h3>Index: ' + change.index + '</h3>';
            resultHTML += '<h3>' + this.showChange(change.item) +  '</h3>';
            break;
          case this.ChangeType.EDITED.TITLE:
            resultHTML += '<h3 style="color: green;">Property/element was edited</h3><br>' ;
            resultHTML += '<h3>Where: ';
            change.path.forEach(path => resultHTML += path + " ");
            resultHTML += '</h3><br>';
            resultHTML += '<h3 style="color: grey; text-decoration: line-through">Old value: ' + change.lhs + '</h3><br>'
            resultHTML += '<h3>New value: ' + change.rhs + '</h3>'
            break;
          case this.ChangeType.NEW.TITLE:
            resultHTML += '<h3 style="color: blue;">Newly added property/element</h3>';
            resultHTML += '<h3>Where: ';
            change.path.forEach(path => resultHTML += path + " ");
            resultHTML += '<h3>New value: ' + change.rhs + '</h3>'
            resultHTML += '</h3><br>';
            break;
          case this.ChangeType.DELETED.TITLE:
            resultHTML += '<h3 style="color: red;">Property/element was deleted</h3>';
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

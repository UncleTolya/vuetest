export default {
  methods: {
    // getChanges(user) {
    //   let changes = [];
    //   let states = user.states;
    //   const diff = require('deep-diff');
    //   for (let i = 1; i <= states.length; i++) {
    //     const pastState = states[i - 1];
    //     const currentState = states[i];
    //     const change = diff(pastState, currentState);
    //     changes.push(change.length > 0 ? change : "There is no changes.");
    //   }
    //   return changes;
    // }
    getChanges() {
      let changes = [];
      let states = user.states;
      const diff = require('deep-diff');
      for (let i = 1; i <= states.length; i++) {
        const pastState = states[i - 1];
        const currentState = states[i];
        const change = diff(pastState, currentState);
        changes.push(change.length > 0 ? change : "There is no changes.");
      }
      return changes;
    }
  }
}

export default {
  data() {
    return {
      num: 1,
      ChangeType: {
        EDITED: {
          TITLE:'E',
          COLOR: 'green',
          PRIORITY: 1
        },
        NEW: {
          TITLE: 'N',
          COLOR: 'blue',
          PRIORITY: 2
        },
        DELETED: {
          TITLE: 'D',
          COLOR: 'red',
          PRIORITY: 3
        },
        ARRAY: {
          TITLE: 'A',
          COLOR: 'pink',
          PRIORITY: 4
        },
        EMPTY: {
          TITLE: undefined,
          COLOR: 'grey',
          PRIORITY: 0
        }
      }
    }
  }
}

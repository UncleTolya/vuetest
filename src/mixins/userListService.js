export default {
  data() {
    return {
      searchName: '2222',
      users: []
    }
  },
  created() {
    this.resource = this.$resource('users');
    this.resource.get()
      .then(resp => resp.json())
      .then(users => this.users = users);
  }
}

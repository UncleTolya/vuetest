let fs = require('fs');
let path = require('path');
let dataDir = '../testdata';
let users = [];
let idCounter = 0;

fs.readdirSync(dataDir).forEach(file => {
  let params = path.basename(file).split('#');
  let userId = +params[1].substring(1);
  let data = fs.readFileSync(dataDir + '/' + file).toString();
  let timeStamp = params[2].split('.')[0] + '000';
  try {
    let state = JSON.parse(data);
    state.timeStamp = timeStamp;
    let noUserId = true;
    for (const user of users) {
      if (user.userId == userId) {
        noUserId = false;
        user.states.push(state);
      }
    }
    if (noUserId) {
      users.push({"id": idCounter++,"userId": userId, "states": [state]});
    }
  } catch (e) {
    console.log(e);
  }

});
const usersJson = '"users": ' + JSON.stringify(users);
const json = '{ ' + usersJson + ' }';

fs.writeFile('../db.json', json, function(err) {
  if (err) throw err;
  console.log('complete');
});

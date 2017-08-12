//a reducer takes two things: the action and copy of current state

function posts(state = [], action) {
  console.log('post will change');
  console.log(state, action);
  return state
}

export default posts

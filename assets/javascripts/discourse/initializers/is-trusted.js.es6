export default {
  name: 'is-trusted',
  initialize(container) {
    const user = container.lookup('current-user:main');
    console.log(user)
    if(user.trust_level >= 3) {
      console.log('no elo');
      user.set('is_trusted', true);
    } else {
      user.set('is_trusted', false)
    }
  }
}

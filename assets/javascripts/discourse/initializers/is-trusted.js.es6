export default {
  name: 'is-trusted',
  initialize(container) {
    const user = container.lookup('current-user:main');
    if(user) {
      if(user.trust_level >= 3) {
        user.set('is_trusted', true);
      } else {
        user.set('is_trusted', false)
      }
    }
  }
}

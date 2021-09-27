export const APIURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3003' + '/posts'
    : 'https://fancy-blog-api.herokuapp.com/posts';
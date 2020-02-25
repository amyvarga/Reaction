import 'isomorphic-fetch';

export default resourceType => {
  return fetch(`http://blog.calloftheforest.com//wp-json/wp/v2/posts/1063`)
    .then(res => res.json())
    .then(data => data);
};

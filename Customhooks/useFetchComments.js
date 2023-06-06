// import React, {useState} from 'react';
// import {Apilinks} from '../Constant';

// const FetchComments = async videoid => {
//   //   const [loading, setloading] = useState(true);
//   //   const [error, seterror] = useState('');
//   await fetch(
//     Apilinks.COMMENTS_HTTP +
//       new URLSearchParams({
//         key: Apilinks.API_KEY,
//         part: 'snippet,replies',
//         videoId: videoid,
//       }),
//   )
//     .then(res => res.json())
//     .then(data => {
//       data.items.forEach(item => {
//         // getChannelIcon(item);
//         console.log(item.snippet.topLevelComment.snippet);
//         // fetchComments(item.id);
//       });
//     })
//     .catch(err => console.log(err));
//   //   //   return {data};
// };

// export default FetchComments;

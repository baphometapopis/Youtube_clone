// import { Apilinks } from '../Constant';

// const fetchChannel = async (id) => {
//   try {
//     const res = await fetch(
//       Apilinks.CHANNEL_HTTP +
//         new URLSearchParams({
//           key: Apilinks.API_KEY,
//           part: 'snippet',
//           id: id,
//         })
//     ).then(res => res.json());

//     if (res.items.length > 0) {
//       const channelImage = res.items[0]?.snippet?.thumbnails?.high;
//       return channelImage;
//     }
//   } catch (err) {
//     console.log(err);
//   }
//   return null;
// };

// export default fetchChannel;
// // import {useEffect, useState} from 'react';
// // import {Apilinks} from '../Constant';

// // const useFetchChannel = async id => {
// //   const [channelImg, setChannelImg] = useState({
// //     url: 'https://yt3.ggpht.com/_P1JQ8TJ3YKBgX_1iL6QTBwY0AER5CfJo4lza9ETeKCFdierATpEvAPYv4mKVpAxSy-Xc8GvhkY=s800-c-k-c0x00ffffff-no-rj',
// //   });

// //   // const fetchChannel = async () => {
// //   // console.log(id)
// //   try {
// //     const data = await fetch(
// //       Apilinks.CHANNEL_HTTP +
// //         new URLSearchParams({
// //           key: Apilinks.API_KEY,
// //           part: 'snippet,contentDetails,statistics',
// //           id: id,
// //         }),
// //     ).then(res => res.json());
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //   }
// //   // .then(data => {

// //   //    data.items.forEach(item => {
// //   //    setChannelImg(item.snippet.thumbnails?.high)
// //   //    }
// //   //    );
// //   // })
// //   // };

// //   // useEffect(() => {
// //   //   fetchChannel();
// //   // }, []);

// //   return {channelImg};
// // };

// // export default useFetchChannel;

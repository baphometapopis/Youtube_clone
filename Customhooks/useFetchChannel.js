import {useEffect, useState} from 'react';
import {Apilinks} from '../Constant';

const useFetchChannel = (id) => {
  const [channelImg, setChannelImg] = useState({url:"https://yt3.ggpht.com/_P1JQ8TJ3YKBgX_1iL6QTBwY0AER5CfJo4lza9ETeKCFdierATpEvAPYv4mKVpAxSy-Xc8GvhkY=s800-c-k-c0x00ffffff-no-rj"} );


  const fetchChannel = async () => {
    // console.log(id)
    await fetch(
      Apilinks.CHANNEL_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'snippet,contentDetails,statistics',
          id:id
        }),
    )
      .then(res => res.json())
      .then(data => {

         data.items.forEach(item => {
         setChannelImg(item.snippet.thumbnails?.high)
         }
         );
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchChannel();
  }, []);

  return {channelImg};
};

export default useFetchChannel;

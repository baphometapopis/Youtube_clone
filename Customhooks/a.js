import React, { useState } from 'react';
import { Apilinks } from '../Constant';

const FetchVideo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchVideo = async () => {
    console.log(Apilinks.VIDEO_HTTP)
    try {
      const res = await fetch(
        Apilinks.VIDEO_HTTP +
          new URLSearchParams({
            key: Apilinks.API_KEY,
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            maxResults: 5,
            regionCode: 'IN',
          })
      ).then(res => res.json());

      // setData(res.items);
      const DataVideoWithID=[]

      for(const data of res.items){
        const channel = await fetchChannel(data.snippet.channelId);
        // console.log(data)
        DataVideoWithID.push({...data,...channel})
      }

      // res.items.forEach(async element => {
        
      //     const channel = await fetchChannel(element.snippet.channelId);
      //     // console.log(channel,element);
      //     DataVideoWithID.push({...element,...channel})
      //     // setData({
      //     //   data:res.items,
      //     //   channelId:channel
      //     // })
          
       
      // });
      setData(DataVideoWithID)
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return { data };
};

const FetchCategories = () => {
  const [data, setdata] = useState([]);

  const Fetch = async () => {
    await fetch(
      Apilinks.CATEGORIES_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'snippet',
          regionCode: 'IN',
        }),
    )
      .then((res) => res.json())
      .then((data) => {
        setdata(data.items);

        data.items.forEach((item) => {
          // getChannelIcon(item);
          // console.log(item);

          // fetchComments(item.id);
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Fetch();
  }, []);

  return { data };
};

const fetchChannel = async (id) => {
  try {
    const res = await fetch(
      Apilinks.CHANNEL_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'snippet',
          id: id,
        })
    ).then(res => res.json());

    if (res.items.length > 0) {
      const channelImage = res.items[0]?.snippet?.thumbnails?.high;
      return channelImage;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

const FetchComments = async (videoid) => {
  await fetch(
    Apilinks.COMMENTS_HTTP +
      new URLSearchParams({
        key: Apilinks.API_KEY,
        part: 'snippet,replies',
        videoId: videoid,
      }),
  )
    .then((res) => res.json())
    .then((data) => {
      data.items.forEach((item) => {
        // getChannelIcon(item);
        console.log(item.snippet.topLevelComment.snippet);
        // fetchComments(item.id);
      });
    })
    .catch((err) => console.log(err));
};

export { FetchVideo, FetchCategories, fetchChannel, FetchComments };

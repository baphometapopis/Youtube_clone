import {useEffect, useState} from 'react';
import {Apilinks} from '../Constant';
import SuggestQueriesComponent from '../Screens/SearchSuggestion';

const FetchVideo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchVideo = async () => {
    try {
      const res = await fetch(
        Apilinks.VIDEO_HTTP +
          new URLSearchParams({
            key: Apilinks.API_KEY,
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            maxResults: 5,
            regionCode: 'IN',
          }),
      ).then(res => res.json());
      // setData(res.items);
      const DataVideoWithID = [];

      for (const data of res.items) {
        const channel = await fetchChannel(data.snippet.channelId);
        DataVideoWithID.push({...data, ...channel});
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
      setData(DataVideoWithID);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideo();
    // SuggestQueriesComponent();
  }, []);

  return {data};
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
      .then(res => res.json())
      .then(data => {
        setdata(data.items);

        data.items.forEach(item => {
          // getChannelIcon(item);
          // console.log(item);
          // fetchComments(item.id);
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    Fetch();
  }, []);

  return {data};
};

const fetchChannel = async id => {
  try {
    const res = await fetch(
      Apilinks.CHANNEL_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: "snippet,contentDetails,statistics",
          id: id,
        }),
    ).then(res => res.json());
    const channelInfo=[]

    if (res.items.length > 0) {
      const customUrl=res.items[0].snippet.customUrl
      const subscriberCount=(res.items[0]?.statistics?.subscriberCount)
      const channelImage = res.items[0]?.snippet?.thumbnails?.high;
      channelInfo.push({...channelImage,customUrl,subscriberCount,});

      return channelInfo;
    }
  } catch (err) {
    console.log(err);
  }
  // return null;
};

const FetchComments = async videoid => {
  await fetch(
    Apilinks.COMMENTS_HTTP +
      new URLSearchParams({
        key: Apilinks.API_KEY,
        part: 'snippet,replies',
        videoId: videoid,
      }),
  )
    .then(res => res.json())
    .then(data => {
      data.items.forEach(item => {
        // getChannelIcon(item);
        console.log(item.snippet.topLevelComment.snippet);
        // fetchComments(item.id);
      });
    })
    .catch(err => console.log(err));
};

const Search = async params => {
  try {
    const res = await fetch(
      Apilinks.SEARCH_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'snippet',
          maxResults: 5,
          q: params,
        }),
    )
      .then(res => res.json())
      .then(async res => {
        const DataVideoWithID = [];
        console.log(res)
        for (const data of res.items) {

          const videoId = await fetchVideoByID(data.id.videoId);
          const channel = await fetchChannel(data.snippet.channelId);
          console.log('>>>>>>>>>>>>>', channel);


          DataVideoWithID.push({...data,...videoId,...channel});
        }
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",DataVideoWithID)
        return DataVideoWithID;
      });

    return res;
  } catch (err) {
    console.log(err);
  }
};

const fetchVideoByID = async (id) => {
  try {
    const res = await fetch(
      Apilinks.VIDEO_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'contentDetails,statistics',
          id:id
        }),
    ).then(res => res.json());

 
        

    return res
  } catch (err) {
    console.log(err);
  }
};

export {FetchVideo, FetchCategories, fetchChannel, FetchComments, Search};

import {useEffect, useState} from 'react';
import {Apilinks} from '../Constant';

const useFetch = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState('');

  const fetchVideo = async () => {
    await fetch(
      Apilinks.VIDEO_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          maxResults: 50,
          regionCode: 'IN',
        }),
    )
      .then(res => res.json())
      .then(data => {
        // data.items.forEach(item => {
        // console.log(item.snippet);
        // fetchComments(item.id);
        setdata(data.items);
        // console.log(typeof data);
        // }
        // );
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return {data};
};

export default useFetch;

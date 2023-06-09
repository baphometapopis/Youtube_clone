import {Apilinks} from '../Constant';
import { useSelector } from 'react-redux';

const fetchChannelPlaylist = async() => {
    const {channelId} = useSelector((state)=>state.channel)

  try {
    const res = await fetch(
      Apilinks.PLAYLIST_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'contentDetails,snippet',
          maxResults:25,
          channelId: 'UCtgGOdTlM-NdJ9rPKIYN8UQ',
        }),
    ).then(res => res.json());

    return res;
  } catch (err) {
    console.log(err);
  }
};

export {fetchChannelPlaylist};

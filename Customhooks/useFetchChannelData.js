import { Apilinks } from '../Constant';

const fetchChannelPlaylist = async (channelId) => {
  try {
    const res = await fetch(
      Apilinks.PLAYLIST_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'contentDetails,snippet',
          maxResults: 25,
          channelId: channelId,
        })
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { fetchChannelPlaylist };

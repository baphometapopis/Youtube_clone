import { Apilinks } from '../Constant';

const fetchChannelPlaylist = async (channelId) => {
  try {
    const res = await fetch(
      Apilinks.PLAYLIST_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'contentDetails,snippet',
          maxResults: Apilinks.MAX_RESULT,
          channelId: channelId,
        })
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};


const fetchChannelPlaylistItems = async (playlistId) => {
  try {
    const res = await fetch(
      Apilinks.PLAYLISTITEM_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'contentDetails,snippet',
          maxResults: Apilinks.MAX_RESULT,
          playlistId: playlistId,
        })
    );

    const data = await res.json();
    
    return data;
  } catch (err) {
    console.log(err);
  }
};

const FetchChannelsShort = async (params) => {
  // console.log(params[0]?.channelName)
  try {
    const res = await fetch(
      Apilinks.SEARCH_HTTP +
        new URLSearchParams({
          key: Apilinks.API_KEY,
          part: 'snippet',
          maxResults: Apilinks.MAX_RESULT,
          q: `${params[0]?.channelName} Shorts`,
          type:'video',
          // videoDuration:'short',
          channelId:params[0]?.channelId
        }),
    )
      .then(res => res.json())
      .then(async res => {
        // console.log(res)
     
        return res;
      });

    return res;
  } catch (err) {
    console.log(err);
  }
};

export { fetchChannelPlaylist,fetchChannelPlaylistItems,FetchChannelsShort };

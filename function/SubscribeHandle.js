import { SearchCategories, fetchChannel } from "../Customhooks/useFetch";

const subscribe=async(channelId,id)=>{
    console.log(" Subscribe Button CLicked",channelId,id)
    const {channelData} = await fetchChannel(channelId);
    const data = await SearchCategories();
    console.log(data)
    
    // console.log(channelData[0]?.snippet?.thumbnails?.high?.url)
}

export {subscribe}
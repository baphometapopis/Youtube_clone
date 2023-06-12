import React ,{useState,useEffect} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,FlatList
  } from 'react-native';
  import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../Constant';
import { converter } from '../../function/dateConverter';
import { fetchChannelPlaylistItems } from '../../Customhooks/useFetchChannelData';
const windowWidth = Dimensions.get('window').width;

const  Item=({items})=>{
  return ( <View style={styles.item}>
    <TouchableOpacity>
    
    <View
      style={{flexDirection: 'row', marginVertical: 10, width: windowWidth}}>
      <View>
        <Image
          source={{
            uri: `${items?.snippet?.thumbnails?.high?.url}`,
          }}
          style={styles.image}
        />
          
      </View>
      <View style={{marginHorizontal: 10, width: 140}}>
        <Text numberOfLines={3} style={{color: Color.TEXT}}>
          {items?.snippet?.title}
        </Text>
        <Text style={styles.desc}>{items.snippet.channelTitle}</Text>
        <Text style={styles.desc}>
          updated {converter(items.snippet.publishedAt)}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  </View>)
}

export const HomeChannelList = ({items,navigate}) => {
  // console.log(items.id);
  const [playlistItem, setPlaylistItem] = useState();

  const GetPlaylistItems = async () => {
    try {
      const data = await fetchChannelPlaylistItems(items.id);
      setPlaylistItem(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPlaylistItems();
  }, [items.id]);

  // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa',playlistItem)
  return(
    
    <View style={styles.item}>
      <Text numberOfLines={1} style={{color:'white',fontSize:20,margin:10}}>{items?.snippet?.title}</Text>
      <FlatList
      initialNumToRender={5}
        data={playlistItem}
        renderItem={({item}) => (
          <Item items={item} navigate={navigate} />
        )}
        keyExtractor={item => item.id}
      />
   
    </View>
  
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    text: {
      color: 'white',
    },
    item: {
      paddingLeft: 8,
      marginVertical: 2,
      marginHorizontal: 1,
    },
    image: {
      // marginVertical: 10,
      width: 180,
      height: 80,
      borderRadius: 8,
    },
    videocount: {
      position: 'absolute',
      width: 180,
      backgroundColor: 'rgba(50,25,25,0.6)',
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      top: 62,
      flexDirection:'row',
      justifyContent:'center'
    },
    desc: {
      color: Color  .TEXTDESC,
      fontSize: 12,
    },
  });
  
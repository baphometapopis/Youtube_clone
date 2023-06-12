import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions
  } from 'react-native';
  import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../Constant';
import { converter } from '../../function/dateConverter';
const windowWidth = Dimensions.get('window').width;


export const PlayListItemList = ({items,navigate}) => {
    const PlaylistID = items.id;
    return(
    
    <View style={styles.item}>
      <TouchableOpacity onPress={()=>{navigate.navigate('listPlaylistItem',{PlaylistID})}}>
      
      <View
        style={{flexDirection: 'row', marginVertical: 10, width: windowWidth}}>
        <View>
          <Image
            source={{
              uri: `${items?.snippet?.thumbnails?.high?.url}`,
            }}
            style={styles.image}
          />
          <View style={styles.videocount}>
          <Icons name="playlist-play" size={20} color="white" />
  
            <Text style={{color: 'white'}}>{items?.contentDetails?.itemCount}</Text>
          </View>
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
  
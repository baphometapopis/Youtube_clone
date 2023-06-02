import React from 'react'

export const ListVideos = () => {
  return (
    <div>ListVideos</div>
  )
}





const Item = ({item, navigation}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {item});
      }}>
      <View style={styles.item}>
        <Image
          source={{
            uri: `${item.snippet.thumbnails.high.url}`,
          }}
          style={styles.image}
        />
  
        <View style={styles.descContainer}>
          <TouchableOpacity style={styles.channellogo}>
            <Image
              source={{
                uri: `${item.snippet.thumbnails.default.url}`,
              }}
              style={styles.logo}
            />
          </TouchableOpacity>
          <View style={styles.desc}>
            <Text numberOfLines={2} style={styles.title}>
              {item.snippet.title}
            </Text>
            <View style={styles.titleAlign}>
              <Text style={styles.titleDesc}>{item?.snippet?.channelTitle}</Text>
              <Text style={styles.titleDesc}>
                {aveta(item.statistics.viewCount, {digits: 2, lowercase: true})}
                Views
              </Text>
              <Text style={styles.titleDesc}>
                {converter(item?.snippet?.publishedAt)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
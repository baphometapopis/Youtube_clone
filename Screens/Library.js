import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header} from '../Components/Header';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Library = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.historyIcon}>
              <Icons name="history" size={32} color="white" />
            </TouchableOpacity>
            <View>
              <Text style={{color: 'white', fontSize: 18, padding: 5}}>
                History
              </Text>
              <Text style={{padding: 5}}>This list has no videos</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{color: '#4B83D5',marginRight:10}}>View</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.historyIcon}>
              <Icons name="playlist-play" size={32} color="white" />
            </TouchableOpacity>
            <View>
              <Text style={{color: 'white', fontSize: 18, padding: 5}}>
                Playlist
              </Text>
              <Text style={{padding: 5}}>The Playlists is empty</Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{color: '#4B83D5', marginRight:10}}>View</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.historyIcon}>
              <Icons name="youtube" size={32} color="white" />
            </TouchableOpacity>
            <View>
              <Text style={{color: 'white', fontSize: 18, padding: 5}}>
                Your Videos
              </Text>
              <Text style={{padding: 5}}>Your Videos is empty</Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{color: '#4B83D5', marginRight:10}}>View</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.historyIcon}>
              <Icons name="download" size={32} color="white" />
            </TouchableOpacity>
            <View>
              <Text style={{color: 'white', fontSize: 18, padding: 5}}>
                Downloads
              </Text>
              <Text style={{padding: 5}}>Downloads Empty</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{color: '#4B83D5',marginRight:10}}>View</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.historyIcon}>
              <Icons name="video" size={32} color="white" />
            </TouchableOpacity>
            <View>
              <Text style={{color: 'white', fontSize: 18, padding: 5}}>
                Your Movies
              </Text>
              <Text style={{padding: 5}}></Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{color: '#4B83D5', marginRight:10}}>View</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  historyIcon: {
    margin: 10,
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import React, { Children } from 'react'
import {View,Text,StyleSheet} from 'react-native'

export const Modal = (props) => {
    console.log(props)
  return (
    <Modal
    // onBackdropPress={() => setModalVisible(false)}
    onBackButtonPress={() => setModalVisible(false)}
    isVisible={isModalVisible}
    swipeDirection="down"
    onSwipeComplete={toggleModal}
    animationIn="bounceInUp"
    animationOut="bounceOutDown"
    animationInTiming={900}
    animationOutTiming={500}
    backdropTransitionInTiming={1000}
    backdropTransitionOutTiming={500}
    backdropColor='transparent'
    style={styles.modal}>
        {props.children}
        </Modal>
  )
}


const styles= StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      modalContent: {
        backgroundColor: '#161616',
        paddingTop: 12,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // minHeight: 555,
        flex:0.69,
        paddingBottom: 20,
      },
      center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      barIcon: {
        width: 60,
        height: 5,
        backgroundColor:Color.TEXTDESC,
        borderRadius: 3,
      },
})
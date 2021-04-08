import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

function Menu({navigation}) {
  return (
    
      <ImageBackground
        source={require('../images/Home.jpg')}
        style={styles.image}
    >
        <Text style={styles.text}>So nice to see you</Text>
      
      {/* Buttons */}
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonRed}
            activeOpacity={0.9}
            onPress={()=> navigation.navigate('PickUp')}
        >
            <Icon name='hamburger' type='font-awesome-5' color="#FFFFFF" />
            <Text style={styles.buttonTextRed}> PickUp at restaurant</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRed}
            activeOpacity={0.9}
        >
            <Icon name='car-side' type='font-awesome-5' color="#FFFFFF" />
            <Text style={styles.buttonTextRed}> Deliver to me</Text>
          </TouchableOpacity>

          <View style={styles.buttonWhiteView}>
            <TouchableOpacity
              style={styles.buttonWhite}
              activeOpacity={0.9}
          >
            <Text style={{fontSize: 15, alignSelf: 'center', color: '#E60E33'}}>Order catering</Text>
          </TouchableOpacity>
          </View>
          

        </View>
      </ImageBackground>
    
      
  
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    padding: 15,
    resizeMode: "cover",
    backgroundColor: 'rgba(1,1,1,0.5)',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  buttonWhiteView: {
    paddingHorizontal: 75,
    padding: 5
  },
  buttonRed: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#E60E33',
    borderRadius: 15,
    margin: 10,
    padding: 5,
  },
  buttonWhite: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    margin: 1
  },
  buttonTextRed: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  text: {
    fontSize: 30,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  }
})

export default Menu;

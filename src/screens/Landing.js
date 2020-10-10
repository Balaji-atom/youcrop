import React from 'react';

import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  Platform,
  StatusBar,
  BackHandler,
} from 'react-native';

import {Container, Text, Button} from 'native-base';

import {RFValue} from 'react-native-responsive-fontsize';

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 3) / 15);
let imageWidth = dimensions.width / 3;

class Landing extends React.Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../assets/images/backgroundImage.jpg')}
          style={styles.imgBackground}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImg}
              source={require('../assets/images/mainlogo.png')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={[styles.buttonInner, {backgroundColor: '#FFC005'}]}
              block>
              <Text style={styles.buttonText}>New Registration</Text>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.replace('Login');
              }}
              style={[styles.buttonInner, {backgroundColor: '#6DA1D1'}]}
              block>
              <Text style={[styles.buttonText, {color: '#FFFFFF'}]}>
                Sign in With Mail
              </Text>
            </Button>
            <View style={styles.socialButtonContainer}>
              <Button style={[styles.socialButton, {marginRight: 2}]}>
                <Image source={require('../assets/images/facebook.png')} />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </Button>
              <Button style={[styles.socialButton, {marginLeft: 2}]}>
                <Image source={require('../assets/images/google.png')} />
                <Text style={styles.socialButtonText}>Google</Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3326AE',
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    flex: 0.2,
    flexDirection: 'column',
    marginTop: '15%',
    alignItems: 'center',
  },
  logoImg: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'contain',
  },

  buttonContainer: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingTop: 300,
  },
  buttonInner: {
    height: 50,
    marginVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  socialButtonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    marginBottom: 50,
  },
  socialButton: {
    flex: 0.5,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  socialButtonText: {
    fontSize: RFValue(14),
    padding: 10,
    color: '#607DB8',
    fontFamily: 'SanFranciscoText-Bold',
    fontWeight: 'bold',
  },
});

export default Landing;

import React from 'react';
import {SafeAreaView, Image, ImageBackground, StyleSheet} from 'react-native';

class Splash extends React.Component {
  componentDidMount() {
    this.navigateTo();
  }

  // Screen Navigation
  navigateTo = async () => {
    setTimeout(() => {
      this.props.navigation.replace('Landing');
    }, 2000);
  };

  render() {
    return (
      <SafeAreaView
        style={{flex: 1}}
        forceInset={{top: 'never', bottom: 'never'}}>
        <ImageBackground
          source={require('../assets/images/sighbg.jpg')}
          style={styles.imgBackground}>
          <Image
            source={require('../assets/images/mainlogo.png')}
            style={{
              width: 250,
              height: 100,
              top: '40%',
              left: 60,
            }}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Splash;

import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import {Container, Button, Form, Item, Input, Icon} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 3) / 15);
let imageWidth = dimensions.width / 3;

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
      isFormSubmit: false,
      isLoading: false,
      keyboardHeight: 0,
    };
  }

  render() {
    const {
      errors,
      email,
      password,
      isLoading,
      isFormSubmit,
      keyboardHeight,
    } = this.state;
    return (
      <Container>
        <ImageBackground
          source={require('../../assets/images/sighbg.jpg')}
          style={styles.imgBackground}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImg}
              source={require('../../assets/images/mainlogo.png')}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Welcome Back !</Text>
          </View>

          <Form
            style={{
              backgroundColor: '#fff',
              flex: 0.4,
              borderTopEndRadius: 40,
              borderTopLeftRadius: 40,
              paddingTop: 20,
            }}>
            <Item>
              <Icon>
                <Image
                  source={require('../../assets/images/email-icn.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </Icon>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Icon>
                <Image
                  source={require('../../assets/images/password-icn.png')}
                />
              </Icon>
              <Input placeholder="Password" />
            </Item>

            <Button
              onPress={() => {
                this.props.navigation.replace('Home');
              }}
              style={[styles.buttonInner, {backgroundColor: '#612D5D'}]}
              block>
              <Text style={[styles.buttonText, {color: '#FFFFFF'}]}>
                Sign in With Mail
              </Text>
            </Button>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Form>
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
  textContainer: {
    flex: 0.5,
  },
  textTitle: {
    color: '#40113D',
    fontSize: RFValue(30),
    paddingHorizontal: 50,
    paddingVertical: 15,
    lineHeight: 30,
    textAlign: 'center',
    fontFamily: 'SanFranciscoText-Regular',
    fontWeight: 'bold',
  },
  buttonInner: {
    height: 50,
    marginVertical: 15,
    borderRadius: 15,
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  forgotText: {
    fontSize: RFValue(12),
    color: '#612D5D',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

export default Signin;

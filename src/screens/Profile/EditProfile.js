import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Content, Left, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomFooter from '../../_components/Footer';
import InputBorderedContainer from '../../_components/InputContainer';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Content>
          <View style={styles.headingBackground}>
            <View style={styles.header}>
              <Left
                style={{
                  flex: 0.9,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{paddingRight: 10, marginTop: 5}}
                  onPress={() => {
                    this.props.navigation.replace('Profile');
                  }}>
                  <Image source={require('../../assets/images/back-icn.png')} />
                </TouchableOpacity>
                <Text style={styles.headingText}>Edit Profile</Text>
              </Left>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={{flex: 0.3, alignItems: 'center'}}>
              <Image
                style={{width: 150, height: 150, borderRadius: 100}}
                source={require('../../assets/images/profileImage/M1.jpg')}
              />
              <Image
                style={{top: -15}}
                source={require('../../assets/images/edit-icon.png')}
              />
            </View>

            <InputBorderedContainer
              label={'FIRST NAME'}
              placeholder={'Praveen'}
            />

            <InputBorderedContainer
              label={'USER NAME'}
              placeholder={'Praveen'}
            />

            <InputBorderedContainer
              label={'WEB SITE'}
              placeholder={'www.google.com'}
            />

            <InputBorderedContainer
              label={'BIO'}
              placeholder={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
              }
            />
            <View style={styles.socialButtonContainer}>
              <Button
                style={[styles.cancle, {marginRight: 2}]}
                onPress={() => {
                  this.props.navigation.replace('Profile');
                }}>
                <Text style={styles.socialButtonText}>Cancle</Text>
              </Button>
              <Button
                style={[styles.save, {marginLeft: 2}]}
                onPress={() => {
                  this.props.navigation.replace('Profile');
                }}>
                <Text style={styles.socialButtonText}>Update</Text>
              </Button>
            </View>
          </View>
        </Content>
        <CustomFooter activeTab={'profile'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
    zIndex: 1,
  },

  headingBackground: {
    backgroundColor: '#F0A6EB',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 20,
  },

  header: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 15,
  },

  headingText: {
    fontSize: RFValue(20),
    color: '#fff',
    paddingLeft: 20,
    fontWeight: 'bold',
  },

  buttonInner: {
    height: 50,
    marginVertical: 15,
    borderRadius: 15,
  },

  contentContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 30,
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
  cancle: {
    flex: 0.5,
    borderRadius: 10,
    backgroundColor: '#F0162A',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 15,
  },

  save: {
    flex: 0.5,
    borderRadius: 10,
    backgroundColor: '#44F016',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 15,
  },

  socialButtonText: {
    fontSize: RFValue(18),
    paddingLeft: 10,
    color: '#fff',
    fontFamily: 'SanFranciscoText-Bold',
    fontWeight: 'bold',
  },
});

export default Profile;

import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Content, Left, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomFooter from '../../_components/Footer';

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
                  onPress={() => {
                    this.props.navigation.replace('Home');
                  }}>
                  <Image
                    style={styles.logoImage}
                    source={require('../../assets/images/mainlogo.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.headingText}>Profile</Text>
              </Left>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.postIcon}>
              <Image
                style={styles.profileIcon}
                source={require('../../assets/images/profileImage/M1.jpg')}
              />
              <Image
                style={{position: 'absolute', bottom: 15, left: 35}}
                source={require('../../assets/images/edit-icon.png')}
              />
              <Text style={styles.profileName}>Vikram</Text>
            </View>

            <View style={styles.postIcon}>
              <Text style={styles.profileName}>20</Text>
              <Text style={styles.postText}>Posts</Text>
            </View>

            <View style={styles.postIcon}>
              <Text style={styles.profileName}>1035</Text>
              <Text style={styles.postText}>Followers</Text>
            </View>

            <View style={styles.postIcon}>
              <Text style={styles.profileName}>102</Text>
              <Text style={styles.postText}>Following</Text>
            </View>
          </View>
          <View>
            <Button
              onPress={() => {
                this.props.navigation.replace('EditProfile');
              }}
              style={[styles.buttonInner, {backgroundColor: '#fff'}]}
              block>
              <Text style={[styles.buttonText, {color: 'black'}]}>
                Edit Profile
              </Text>
            </Button>
          </View>
          <View style={{paddingTop: 30}}>
            <Text
              style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
              Profile
            </Text>
            <Text style={{textAlign: 'center', fontSize: 16, paddingTop: 30}}>
              When you share the photos and videos, they'll appear on your
              profile
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                paddingTop: 30,
                color: '#5C8BEF',
              }}>
              Share Your Photos or Video
            </Text>
          </View>

          <View>
            <Button
              onPress={() => {
                this.props.navigation.replace('Landing');
              }}
              style={[styles.buttonInner, {backgroundColor: '#F0162A'}]}
              block>
              <Text style={[styles.buttonText, {color: 'black'}]}>LOGOUT</Text>
            </Button>
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

  logoImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },

  headingText: {
    fontSize: RFValue(20),
    color: '#fff',
    paddingLeft: 20,
    fontWeight: 'bold',
  },

  profileIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 100,
  },

  profileName: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  postIcon: {
    padding: 10,
    paddingTop: 20,
    marginLeft: 10,
  },

  buttonInner: {
    height: 50,
    marginVertical: 15,
    borderRadius: 15,
  },
});

export default Profile;

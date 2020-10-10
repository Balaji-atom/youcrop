import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Content, Left, Right, Card} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomFooter from '../../_components/Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Content>
          <View style={styles.headerWrap}>
            <View style={styles.header}>
              <Left
                style={{
                  flex: 0.9,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={styles.logoImage}
                  source={require('../../assets/images/mainlogo.png')}
                />
                <Text style={styles.headingText}>YOU CORP</Text>
              </Left>
              <Right
                style={{
                  flex: 0.3,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  top: -10,
                }}>
                <TouchableOpacity
                  style={{top: 10}}
                  onPress={() => {
                    this.props.navigation.replace('Profile');
                  }}>
                  <Image
                    style={styles.profileIcon}
                    source={require('../../assets/images/profileImage/rock.jpg')}
                  />
                </TouchableOpacity>
              </Right>
            </View>
          </View>

          <View style={{paddingTop: 20}}>
            <Text style={{fontWeight: 'bold', paddingLeft: 10}}>
              New Status Today !
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card style={styles.status}>
              <View>
                <Image
                  style={styles.stautsProfile}
                  source={require('../../assets/images/profileImage/poster.jpg')}
                />
              </View>
            </Card>

            <Card style={styles.status}>
              <View>
                <Image
                  style={styles.stautsProfile}
                  source={require('../../assets/images/profileImage/a.jpg')}
                />
              </View>
            </Card>

            <Card style={styles.status}>
              <View>
                <Image
                  style={styles.stautsProfile}
                  source={require('../../assets/images/profileImage/M1.jpg')}
                />
              </View>
            </Card>

            <Card style={styles.status}>
              <View>
                <Image
                  style={styles.stautsProfile}
                  source={require('../../assets/images/profileImage/S.jpg')}
                />
              </View>
            </Card>

            <Card style={styles.status}>
              <View>
                <Image
                  style={styles.stautsProfile}
                  source={require('../../assets/images/profileImage/Y.jpg')}
                />
              </View>
            </Card>
          </ScrollView>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Card
              style={{
                paddingTop: 20,
                marginTop: 20,
                borderRadius: 20,
                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Image
                  style={styles.profileIcon}
                  source={require('../../assets/images/profileImage/rock.jpg')}
                />
                <Text style={styles.profileName}>Rock</Text>
              </View>
              <TouchableOpacity
                style={styles.statusContainer}
                onPress={() => {
                  this.props.navigation.replace('Status');
                }}>
                <Image
                  style={styles.bannerImage}
                  source={require('../../assets/images/profileImage/images.jpg')}
                />
                <View style={{flexDirection: 'row-reverse'}}>
                  <View style={styles.shareIconContainer}>
                    <Image
                      style={styles.shareIcon}
                      source={require('../../assets/images/share.png')}
                    />
                    <Image
                      style={[styles.shareIcon, {right: 10}]}
                      source={require('../../assets/images/fav.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold'}}>53 Likes</Text>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Disneyplushotstar</Text>{' '}
                  Honer to be a part of this project
                </Text>
              </View>
            </Card>

            <Card
              style={{
                paddingTop: 20,
                marginTop: 20,
                borderRadius: 20,
                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Image
                  style={styles.profileIcon}
                  source={require('../../assets/images/profileImage/a.jpg')}
                />
                <Text style={styles.profileName}>Surya</Text>
              </View>
              <TouchableOpacity
                style={styles.statusContainer}
                onPress={() => {
                  this.props.navigation.replace('Status');
                }}>
                <Image
                  style={styles.bannerImage}
                  source={require('../../assets/images/profileImage/download.jpg')}
                />
                <View style={{flexDirection: 'row-reverse'}}>
                  <View style={styles.shareIconContainer}>
                    <Image
                      style={styles.shareIcon}
                      source={require('../../assets/images/share.png')}
                    />
                    <Image
                      style={[styles.shareIcon, {right: 10}]}
                      source={require('../../assets/images/fav.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold'}}>53 Likes</Text>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Disneyplushotstar</Text>{' '}
                  Honer to be a part of this project
                </Text>
              </View>
            </Card>

            <Card
              style={{
                paddingTop: 20,
                marginTop: 20,
                borderRadius: 20,
                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Image
                  style={styles.profileIcon}
                  source={require('../../assets/images/profileImage/M1.jpg')}
                />
                <Text style={styles.profileName}>Vikram</Text>
              </View>
              <TouchableOpacity
                style={styles.statusContainer}
                onPress={() => {
                  this.props.navigation.replace('Status');
                }}>
                <Image
                  style={styles.bannerImage}
                  source={require('../../assets/images/profileImage/Word-Map-Wallpaper-HD-Background-Wallpapers.jpg')}
                />
                <View style={{flexDirection: 'row-reverse'}}>
                  <View style={styles.shareIconContainer}>
                    <Image
                      style={styles.shareIcon}
                      source={require('../../assets/images/share.png')}
                    />
                    <Image
                      style={[styles.shareIcon, {right: 10}]}
                      source={require('../../assets/images/fav.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold'}}>53 Likes</Text>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Disneyplushotstar</Text>{' '}
                  Honer to be a part of this project
                </Text>
              </View>
            </Card>

            <Card
              style={{
                paddingTop: 20,
                marginTop: 20,
                borderRadius: 20,
                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Image
                  style={styles.profileIcon}
                  source={require('../../assets/images/profileImage/poster.jpg')}
                />
                <Text style={styles.profileName}>Rock</Text>
              </View>
              <TouchableOpacity
                style={styles.statusContainer}
                onPress={() => {
                  this.props.navigation.replace('Status');
                }}>
                <Image
                  style={styles.bannerImage}
                  source={require('../../assets/images/profileImage/maxresdefault.jpg')}
                />
                <View style={{flexDirection: 'row-reverse'}}>
                  <View style={styles.shareIconContainer}>
                    <Image
                      style={styles.shareIcon}
                      source={require('../../assets/images/share.png')}
                    />
                    <Image
                      style={[styles.shareIcon, {right: 10}]}
                      source={require('../../assets/images/fav.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold'}}>53 Likes</Text>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Disneyplushotstar</Text>{' '}
                  Honer to be a part of this project
                </Text>
              </View>
            </Card>

            <Card
              style={{
                paddingTop: 20,
                marginTop: 20,
                borderRadius: 20,
                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Image
                  style={styles.profileIcon}
                  source={require('../../assets/images/profileImage/M1.jpg')}
                />
                <Text style={styles.profileName}>Vikram</Text>
              </View>
              <TouchableOpacity
                style={styles.statusContainer}
                onPress={() => {
                  this.props.navigation.replace('Status');
                }}>
                <Image
                  style={styles.bannerImage}
                  source={require('../../assets/images/profileImage/images1.jpg')}
                />
                <View style={{flexDirection: 'row-reverse'}}>
                  <View style={styles.shareIconContainer}>
                    <Image
                      style={styles.shareIcon}
                      source={require('../../assets/images/share.png')}
                    />
                    <Image
                      style={[styles.shareIcon, {right: 10}]}
                      source={require('../../assets/images/fav.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold'}}>53 Likes</Text>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Disneyplushotstar</Text>{' '}
                  Honer to be a part of this project
                </Text>
              </View>
            </Card>
          </ScrollView>
        </Content>
        <CustomFooter activeTab={'home'} />
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
  headerWrap: {
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
  bannerImage: {
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 250,
  },
  statusContainer: {
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    marginTop: 10,
    overflow: 'hidden',
  },

  status: {
    resizeMode: 'contain',
    borderRadius: 100,
    borderColor: 'red',
    padding: 4,
    marginTop: 20,
    marginLeft: 20,
    overflow: 'hidden',
  },

  stautsProfile: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 100,
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
    top: 15,
    paddingLeft: 20,
  },
  shareIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  shareIconContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: -35,
  },
});

export default Home;

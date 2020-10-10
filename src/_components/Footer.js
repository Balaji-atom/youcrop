import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
class CustomFooter extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <TouchableOpacity
            style={[
              styles.footerTab,
              {
                borderBottomWidth: this.props.activeTab == 'home' ? 3 : 0,
                borderColor:
                  this.props.activeTab == 'home' ? '#5F465E' : '#FFFFFF',
              },
            ]}>
            <Icon>
              <Image source={require('../assets/images/house.png')} />
            </Icon>
            <Text
              style={[
                styles.footerText,
                {
                  color: this.props.activeTab == 'home' ? '#5F465E' : '#FFFFFF',
                },
              ]}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.footerTab,
              {
                borderBottomWidth: this.props.activeTab == 'status' ? 3 : 0,
                borderColor: this.props.activeTab == 'status' ? '#5F465E' : '',
              },
            ]}>
            <Icon>
              <Image source={require('../assets/images/tv.png')} />
            </Icon>
            <Text
              style={[
                styles.footerText,
                {
                  color:
                    this.props.activeTab == 'status' ? '#5F465E' : '#FFFFFF',
                },
              ]}>
              Status
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footerTab,
              {
                borderBottomWidth: this.props.activeTab == 'profile' ? 3 : 0,
                borderColor: this.props.activeTab == 'profile' ? '#5F465E' : '',
              },
            ]}>
            <Icon>
              <Image source={require('../assets/images/user.png')} />
            </Icon>
            <Text
              style={[
                styles.footerText,
                {
                  color:
                    this.props.activeTab == 'profile' ? '#5F465E' : '#FFFFFF',
                },
              ]}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F0A6EB',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  footerTab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingHorizontal: 7,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: RFValue(12),
    paddingTop: 5,
  },
});

export default CustomFooter;

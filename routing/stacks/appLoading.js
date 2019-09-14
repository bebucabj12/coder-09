import React from 'react';
import {AsyncStorage} from 'react-native';

class AppLoading extends React.Component {
  async componentDidMount () {
    const {navigation: {navigate}} = this.props;
    try {
      const auth = await AsyncStorage.getItem ('auth');

      const {isLoggedIn} = JSON.parse (auth);
      if (isLoggedIn) {
        navigate ('Dashboard');
      }
    } catch (e) {
      navigate ('Auth');
    }
  }
  render () {
    return null;
  }
}

export default AppLoading;

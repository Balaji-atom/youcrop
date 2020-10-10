import {CommonActions} from '@react-navigation/native';

export const common = {
  resetNavigation(navigation, routes) {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: routes,
      }),
    );
  },
};

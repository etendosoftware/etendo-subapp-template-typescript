import React from 'react';
import Home from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import locale from './src/localization/locale';
import { IFile } from './src/interfaces/IFile';

interface NavigationContainerProps {
  navigate: (screenName: string, params?: any) => void;
}

interface HomeProps {
  language: string;
  navigationContainer: NavigationContainerProps;
  sharedFiles: IFile[];
}

const App = ({language, navigationContainer, sharedFiles}: HomeProps) => {
  const Stack = createStackNavigator();

  locale.init();
  locale.setCurrentLanguage(locale.formatLanguageUnderscore(language));

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{ headerShown: false }} name="Home">
        {props => <Home {...props} navigationContainer={navigationContainer} sharedFiles={sharedFiles} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export {App};
export default App;

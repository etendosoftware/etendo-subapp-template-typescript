import React from 'react';
import {Text, View} from 'react-native';
import locale from '../../localization/locale';
import {styles} from './style';
import {Button, BackIcon} from 'etendo-ui-library';

interface NavigationContainerProps {
  navigate: (screenName: string, params?: any) => void;
}

interface HomeProps {
  navigationContainer: NavigationContainerProps;
}

const Home: React.FC<HomeProps> = ({navigationContainer}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{locale.t('Home.welcome')}</Text>
      <Button
        typeStyle={'primary'}
        text={locale.t('Home.back')}
        iconLeft={<BackIcon />}
        onPress={() => {
          navigationContainer.navigate('Home');
        }}
      />
    </View>
  );
};

export default Home;

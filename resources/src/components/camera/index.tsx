import React from 'react';
import {Modal, View} from 'react-native';
import CameraBarCode from '../cameraBarCode';
import ButtonUI from 'etendo-ui-library/dist-native/components/button/Button';
import {CancelIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CancelIcon';
import {generalStyles} from '../../../styles';
import {isTablet} from '../../utils';
import {useTranslation} from 'react-i18next';

interface CameraProps {
  show: boolean;
  setShow: (show: boolean) => void;
  handleReadCode: (code: string) => void;
}

const Camera: React.FC<CameraProps> = ({show, setShow, handleReadCode}) => {
  const {t} = useTranslation();
  return show ? (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
          zIndex: -1,
          position: 'relative',
        }}>
        <CameraBarCode ableToRead={show} handleReadCode={handleReadCode} />
      </View>
      <View
        style={[
          generalStyles.buttonContainer,
          {
            position: 'absolute',
            bottom: 30,
            width: isTablet ? '20%' : '60%',
            height: '100%',
            justifyContent: 'flex-end',
            alignSelf: 'center',
          },
        ]}>
        <ButtonUI
          width="100%"
          height={50}
          typeStyle="primary"
          onPress={() => {
            setShow(false);
          }}
          text={t('Common.cancel')}
          iconLeft={<CancelIcon style={generalStyles.icon} />}
        />
      </View>
    </Modal>
  ) : (
    <></>
  );
};

export default Camera;
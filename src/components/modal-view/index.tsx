import React, { ReactNode } from 'react';
import { Modal, ModalProps, View, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../background';

import { styles } from './modal-view.styles';

interface ModalViewProps extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: ModalViewProps) {
  return (
    <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

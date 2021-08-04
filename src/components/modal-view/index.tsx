import React, { ReactNode } from "react";
import { Modal, ModalProps, View } from "react-native";
import { Background } from "../background";

import { styles } from './modal-view.styles'

interface ModalViewProps extends ModalProps {
  children: ReactNode;
}

export function ModalView({children,...rest}: ModalViewProps) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  )
}
import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import styles from "./ModalStyle";

const Modal = ({ image }) => {
  return (
    <View style={styles.modalContainer}>
      <StatusBar backgroundColor='#525252' barStyle='dark-content' />
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.imageHeader}
          />

          <Text style={styles.nameHeader}>Nom de l'utilisateur</Text>
        </View>
        <Image
          source={{
            uri: image,
          }}
          style={styles.bodyHeader}></Image>
      </View>
    </View>
  );
};

export default Modal;

import { View, Text } from "react-native";
import React, { useState } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import { videoData } from "../../../data/VideoData";
import SingleReel from "../singleReel/SingleReel";

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //Méthode qui permet d'actualisé l'index du scroll dans le but de lire uniquementla vidéo correspondant a l'index courant
  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      data={videoData}
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({ item, index }) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default Videos;

import React, { useState } from 'react';
import { View, Button, Image, ScrollView, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const MultipleImages: React.FC = () => {
  const [images, setImages] = useState<Array<{ uri: string }>>([]);

  const selectImages = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((selectedImages) => {
        const formattedImages = selectedImages.map((image) => ({
          uri: image.path,
        }));
        setImages(formattedImages);
      })
      .catch((error) => {
        console.error('Error selecting images: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Select Images" onPress={selectImages} />
      <ScrollView horizontal style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image.uri }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 20,
    flexDirection: "row"
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default MultipleImages;

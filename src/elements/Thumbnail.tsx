import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* Interface */
interface Props {
  text: string;
  height: number;
  width: number;
}

/**
 * @function Thumbnail
 * Function to render the thumbnail box in the entity list and the modal window
 * @param Props passed down by parent element
 * @returns A view of the thumbnail box with the first letter of the title in the middle
 */
export default function Thumbnail({ text, height, width }: Props) {
  return (
    <View style={[styles.thumbnail, { height: height, width: width }]}>
      <Text style={styles.thumbnailText}>{text}</Text>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  thumbnailText: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
  },
  thumbnail: {
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});

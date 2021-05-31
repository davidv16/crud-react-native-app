import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

interface Props {
  backgroundColor: string
  color: string
  text: string
}

export default function Thumbnail(props: Props) {
  return (
    <View>
      <TouchableHighlight
        style={[
          styles.thumbnail,
          {
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
          }
        ]}
      >
        <View>
            <Text
              style={[
                styles.thumbnailText,
                { color: props.color },
              ]}
            >
              {props.text}
            </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}


const styles = StyleSheet.create({
  thumbnail: {
    height: 76,
    width: 76,
  },
  thumbnailText: {
    textAlign: 'center',
    fontSize: 32,
  }
});
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

interface TextStyleProps {
  isTitle?: boolean;
  additionalStyle?: object;
}

const TextComponent = ({
  children,
  isTitle,
  additionalStyle,
}: React.PropsWithChildren<TextStyleProps>) => (
  <Text style={[isTitle ? styles.titleText : styles.bodyText, additionalStyle]}>
    {children}
  </Text>
);

const CircleComponent = () => (
  <View style={styles.circle}>
    <TextComponent additionalStyle={styles.circleText}>9</TextComponent>
    <View style={styles.innerCircle}>
      <TextComponent additionalStyle={styles.circleText}>12</TextComponent>
    </View>
    <View style={styles.circleDot} />
    <TextComponent additionalStyle={styles.bottomCircleText}>3</TextComponent>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(238, 238, 238, 0.93)',
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 19,
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: 'auto',
  },
  header: {
    backgroundColor: '#54C8E7',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 29px 73px 0',
  },
  profileImage: {
    overflow: 'hidden',
    backgroundColor: 'rgba(99, 223, 255, 0.79)',
    borderRadius: 50,
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    aspectRatio: 2.5,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  secureSpace: {height: 148},
  profileIcon: {
    position: 'relative',
    zIndex: 10,
    width: 120,
    maxWidth: '100%',
    aspectRatio: 1,
  },
  titleText: {
    color: '#92E5FB',
    textAlign: 'center',
    marginTop: 29,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    fontSize: 24,
  },
  afternoonSection: {
    alignSelf: 'end',
    display: 'flex',
    width: 258,
    maxWidth: '100%',
    flexDirection: 'column',
    alignItems: 'start',
    fontSize: 15,
    color: '#49B4CF',
    fontWeight: '700',
    textAlign: 'center',
    margin: '20px 26px 0 0',
  },
  circle: {
    backgroundColor: '#FFF',
    borderRadius: 87.5,
    display: 'flex',
    marginTop: 19,
    width: 175,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circleText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 15,
    textAlign: 'center',
  },
  innerCircle: {
    marginTop: 38,
    width: 14,
    height: 14,
    backgroundColor: '#D9D9D9',
    borderRadius: 7,
  },
  circleDot: {
    position: 'absolute',
    bottom: 0,
    width: 14,
    height: 14,
    backgroundColor: '#D9D9D9',
    borderRadius: 7,
    alignSelf: 'center',
  },
  bottomCircleText: {
    position: 'absolute',
    bottom: -20,
    fontWeight: '700',
  },
  paragraph: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 50,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginTop: 10,
    width: '100%',
    maxWidth: 367,
    color: '#000',
    textAlign: 'center',
    padding: '32px 30px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    fontSize: 15,
  },
  bodyText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
});

const MyComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="cover"
          source={{uri: 'profileUri'}}
          style={styles.profileImage}>
          <View style={styles.secureSpace} />
        </Image>
        <Image
          resizeMode="auto"
          source={{uri: 'iconUri'}}
          style={styles.profileIcon}
        />
        <TextComponent isTitle>Welcome Lisa!!</TextComponent>
      </View>
      <View style={styles.afternoonSection}>
        <TextComponent>Good Afternoon</TextComponent>
        <CircleComponent />
        <TextComponent additionalStyle={styles.bottomCircleText}>
          6
        </TextComponent>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.bodyText}>
          i feugiat facilisi vitae nulla. Auctor tortor venenatis quis commodo
          lorem risus mauris nullam. Sollicitudin lectus ac risus tincidunt cras
          adipiscing mattis enim porta.
        </Text>
      </View>
    </ScrollView>
  );
};

export default MyComponent;

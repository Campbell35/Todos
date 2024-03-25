/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

interface TextProps {
  content: string;
  textStyle: any;
}

const MyText: React.FC<TextProps> = ({content, textStyle}) => (
  <Text style={textStyle}>{content}</Text>
);

const App = () => {
  const textContents = [
    {content: 'Welcome Onboard', style: styles.welcomeText},
    {content: 'Lets help you build your app', style: styles.subtitleText},
  ];

  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="cover"
        source={{uri: 'imageURL'}}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        {textContents.map((text, index) => (
          <MyText key={index} content={text.content} textStyle={text.style} />
        ))}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signInText}>
            Already have an account?{' '}
            <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(238, 238, 238, 0.93)',
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 18,
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: 'auto',
  },
  profileImage: {
    overflow: 'hidden',
    backgroundColor: 'rgba(99, 223, 255, 0.47)',
    borderRadius: 50,
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    aspectRatio: 2.5,
    width: '100%',
    maxWidth: 367,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textContainer: {
    display: 'flex',
    marginTop: 107,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    textAlign: 'center',
    padding: '0 42px',
  },
  welcomeText: {
    color: 'rgba(0, 0, 0, 0.80)',
    alignSelf: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 24,
    fontWeight: '700',
  },
  subtitleText: {
    color: 'rgba(0, 0, 0, 0.79)',
    fontFamily: 'Poppins, sans-serif',
    alignSelf: 'center',
    marginTop: 28,
  },
  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54C8E7',
    marginTop: 401,
    paddingVertical: 13,
    paddingHorizontal: 56,
  },
  registerButtonText: {
    color: '#FFF',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 20,
    fontWeight: '700',
  },
  signInText: {
    fontFamily: 'Poppins, sans-serif',
    marginTop: 27,
    color: 'rgba(0, 0, 0, 0.79)',
    alignSelf: 'center',
  },
  signInLink: {
    color: '#49B4CF',
  },
});

export default App;

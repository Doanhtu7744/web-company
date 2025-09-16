import React from 'react';
import { ScrollView, Platform } from 'react-native';

const CustomScrollView = ({ children, style, contentContainerStyle, ...props }) => {
  const webStyles = Platform.OS === 'web' ? {
    overflow: 'auto',
    scrollbarWidth: 'auto',
    WebkitOverflowScrolling: 'touch',
  } : {};

  const webContentStyles = Platform.OS === 'web' ? {
    minHeight: '120vh', // Ensure enough content to scroll
    paddingBottom: 200, // Extra padding for web to ensure full scroll
  } : {};

  return (
    <ScrollView
      style={[style, webStyles]}
      contentContainerStyle={[contentContainerStyle, webContentStyles]}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
      indicatorStyle="black"
      bounces={true}
      scrollEventThrottle={16}
      alwaysBounceVertical={false}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default CustomScrollView;

import React, { forwardRef } from 'react';
import { ScrollView, Platform } from 'react-native';

const CustomScrollView = forwardRef(({ children, style, contentContainerStyle, ...props }, ref) => {
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
      ref={ref}
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
});

export default CustomScrollView;

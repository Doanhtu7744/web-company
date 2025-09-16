import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ScrollTest = () => {
  const items = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
      indicatorStyle="black"
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Scroll Test - Header (Fixed)</Text>
      </View>
      
      <View style={styles.content}>
        {items.map((item) => (
          <View key={item} style={styles.item}>
            <Text style={styles.itemText}>Item {item}</Text>
            <Text style={styles.itemDesc}>
              This is item number {item}. You should be able to scroll through all items 
              and see item 50 at the bottom without any content being cut off.
            </Text>
          </View>
        ))}
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🎉 SUCCESS! If you can see this message, scrolling is working correctly!
          </Text>
          <Text style={styles.footerText}>
            This is the very last item (Item 50). The scroll should allow you to see this completely.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 80, // Space for header
    paddingBottom: 150, // Extra space at bottom
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3f3f3f',
    padding: 20,
    zIndex: 1000,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ScrollTest;

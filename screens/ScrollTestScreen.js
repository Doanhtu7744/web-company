import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomScrollView from '../components/CustomScrollView';

const ScrollTestScreen = ({ navigation }) => {
  const items = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <CustomScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scroll Test</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>Scroll Test Page</Text>
          <Text style={styles.introText}>
            This page tests if scrolling works correctly. You should be able to:
          </Text>
          <Text style={styles.introText}>• See the scrollbar on the right side</Text>
          <Text style={styles.introText}>• Scroll down to see all 30 items</Text>
          <Text style={styles.introText}>• See the success message at the bottom</Text>
          <Text style={styles.introText}>• Not have any content cut off</Text>
        </View>

        {items.map((item) => (
          <View key={item} style={styles.item}>
            <Text style={styles.itemNumber}>Item {item}</Text>
            <Text style={styles.itemText}>
              This is test item number {item}. Each item should be fully visible when you scroll to it.
              The scrollbar should allow you to reach the very bottom of this page.
            </Text>
          </View>
        ))}

        <View style={styles.successCard}>
          <Text style={styles.successTitle}>🎉 Congratulations!</Text>
          <Text style={styles.successText}>
            If you can see this message completely, including this text and the border around it,
            then scrolling is working perfectly! This is the very last item on the page.
          </Text>
          <Text style={styles.successText}>
            Item count: {items.length} items total
          </Text>
        </View>
      </View>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 100, // Extra padding at bottom
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3f3f3f',
    padding: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  backButton: {
    flex: 1,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerTitle: {
    flex: 2,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeholder: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 80, // Space for fixed header
  },
  introCard: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2196f3',
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 10,
  },
  introText: {
    fontSize: 14,
    color: '#1976d2',
    marginBottom: 5,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  successCard: {
    backgroundColor: '#4caf50',
    padding: 25,
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 3,
    borderColor: '#2e7d32',
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  successText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 22,
  },
});

export default ScrollTestScreen;

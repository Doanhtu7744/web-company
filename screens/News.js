import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const NewsScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('Korean');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  const handleLogoPress = () => {
    navigation.navigate('Home');
  };

  const handleMenuPress = (menuItem) => {
    if (menuItem === 'Subsidiary') {
      navigation.navigate('Subsidiary');
    } else if (menuItem === 'Branches') {
      navigation.navigate('Branches');
    } else if (menuItem === 'News') {
      navigation.navigate('News');
    }
    // Add other navigation logic as needed
  };

  const handleNewsPress = (newsId) => {
    navigation.navigate('DetailedNews', { newsId });
  };

  const newsData = [
    { id: 1, title: 'News Title 1', description: 'News Description 1' },
    { id: 2, title: 'News Title 2', description: 'News Description 2' },
    { id: 3, title: 'News Title 3', description: 'News Description 3' },
    { id: 4, title: 'News Title 4', description: 'News Description 4' },
    { id: 5, title: 'News Title 5', description: 'News Description 5' },
    { id: 6, title: 'News Title 6', description: 'News Description 6' },
    { id: 7, title: 'News Title 7', description: 'News Description 7' },
    { id: 8, title: 'News Title 8', description: 'News Description 8' },
    { id: 9, title: 'News Title 9', description: 'News Description 9' },
    { id: 10, title: 'News Title 10', description: 'News Description 10' },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
      indicatorStyle="black"
      contentContainerStyle={styles.scrollContent}
      bounces={true}
      scrollEventThrottle={16}
      alwaysBounceVertical={false}
      nestedScrollEnabled={true}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.logo} onPress={handleLogoPress}>
          <Text style={styles.logoText}>LOGO</Text>
        </TouchableOpacity>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleMenuPress('Subsidiary')}>
            <Text style={styles.menuItem}>Subsidiary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleMenuPress('Branches')}>
            <Text style={styles.menuItem}>Branches</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleMenuPress('Partners')}>
            <Text style={styles.menuItem}>Partners</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleMenuPress('Projects')}>
            <Text style={styles.menuItem}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleMenuPress('News')}>
            <Text style={styles.menuItem}>News</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            <Text style={styles.buttonText}>Language</Text>
          </TouchableOpacity>
          {showLanguageDropdown && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => handleLanguageSelect('Korean')}>
                <Text style={styles.dropdownItem}>Korean</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLanguageSelect('English')}>
                <Text style={styles.dropdownItem}>English</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Page Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>News</Text>
        </View>

        {/* News Grid */}
        <View style={styles.newsGrid}>
          {newsData.map((news) => (
            <TouchableOpacity
              key={news.id}
              style={styles.newsItem}
              onPress={() => handleNewsPress(news.id)}
            >
              <View style={styles.newsContent}>
                <Image
                  source={{ uri: `https://via.placeholder.com/150x100?text=Screenshot+${news.id}` }}
                  style={styles.newsImage}
                />
                <View style={styles.newsTextContainer}>
                  <Text style={styles.newsTitle}>{news.title}</Text>
                  <Text style={styles.newsDescription}>{news.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 150, // Tăng padding để có thể cuộn đến cuối
    paddingTop: 80, // Thêm padding top để tránh header che
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3f3f3f',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  logo: { flex: 1 },
  logoText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  menu: { flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  menuItemContainer: {
    marginHorizontal: 65,
  },
  menuItem: { color: '#fff', fontSize: 14 },
  buttonGroup: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' },
  headerButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: { color: 'white', fontSize: 12 },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    width: 100,
    zIndex: 1001,
  },
  dropdownItem: {
    fontSize: 12,
    padding: 5,
    color: '#333',
  },
  mainContent: {
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  newsGrid: {
    flexDirection: 'column',
  },
  newsItem: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    padding: 15,
  },
  newsContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  newsImage: {
    width: 120,
    height: 80,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginRight: 15,
  },
  newsTextContainer: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
});

export default NewsScreen;
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const DetailedNewsScreen = ({ navigation }) => {
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
        {/* Large Screenshot */}
        <View style={styles.largeImageContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/600x400?text=Screenshot' }} style={styles.largeImage} />
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>Title</Text>
        </View>

        {/* Description Section */}
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.descriptionText}>This is a detailed description of the news article.</Text>
          <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <Text style={styles.descriptionText}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <Text style={styles.descriptionText}>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Text>
          <Text style={styles.descriptionText}>Duis aute irure dolor in reprehenderit in voluptate velit esse.</Text>
          <Text style={styles.descriptionText}>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</Text>
          <Text style={styles.descriptionText}>Qui officia deserunt mollit anim id est laborum.</Text>
        </View>

        {/* Additional Content */}
        <View style={styles.descriptionSection}>
          <Text style={styles.titleText}>Additional Information</Text>
          <Text style={styles.descriptionText}>This is additional content to ensure scrolling works properly.</Text>
          <Text style={styles.descriptionText}>The scrollbar should be visible on the right side of the screen.</Text>
          <Text style={styles.descriptionText}>Try scrolling up and down to test the functionality.</Text>
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
    marginHorizontal: 15,
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
  largeImageContainer: {
    marginBottom: 20,
  },
  largeImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  titleSection: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionSection: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    minHeight: 200,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default DetailedNewsScreen;
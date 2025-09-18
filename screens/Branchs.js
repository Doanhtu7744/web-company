import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const BranchsScreen = ({ navigation }) => {
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

  const hanoiBranches = [
    {
      id: 1,
      title: 'Chi nhánh Hà Nội - Trung tâm',
      description: 'Chi nhánh chính tại trung tâm thành phố Hà Nội, phục vụ khách hàng khu vực nội thành.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-1248845-512.png'
    },
    {
      id: 2,
      title: 'Chi nhánh Hà Nội - Cầu Giấy',
      description: 'Chi nhánh tại quận Cầu Giấy, phục vụ khu vực phía Tây Hà Nội.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-1264419-512.png'
    },
    {
      id: 3,
      title: 'Chi nhánh Hà Nội - Đống Đa',
      description: 'Chi nhánh tại quận Đống Đa, phục vụ khu vực trung tâm và các quận lân cận.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-2759964-512.png'
    },
    {
      id: 4,
      title: 'Chi nhánh Hà Nội - Hai Bà Trưng',
      description: 'Chi nhánh tại quận Hai Bà Trưng, phục vụ khu vực phía Đông Hà Nội.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-3420343-512.png'
    },
    {
      id: 5,
      title: 'Chi nhánh Hà Nội - Long Biên',
      description: 'Chi nhánh tại quận Long Biên, phục vụ khu vực phía Bắc sông Hồng.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-3409543-512.png'
    },
  ];

  const hoChiMinhBranches = [
    {
      id: 1,
      title: 'Chi nhánh TP.HCM - Quận 1',
      description: 'Chi nhánh chính tại trung tâm thành phố, phục vụ khu vực quận 1 và các quận trung tâm.',
      icon: 'https://static.thenounproject.com/png/building-icon-3739759-512.png'
    },
    {
      id: 2,
      title: 'Chi nhánh TP.HCM - Quận 3',
      description: 'Chi nhánh tại quận 3, phục vụ khu vực trung tâm và các quận lân cận.',
      icon: 'https://static.thenounproject.com/png/organization-icon-2201036-512.png'
    },
    {
      id: 3,
      title: 'Chi nhánh TP.HCM - Quận 7',
      description: 'Chi nhánh tại quận 7, phục vụ khu vực phía Nam thành phố và khu đô thị mới.',
      icon: 'https://static.thenounproject.com/png/subsidiary-icon-5247442-512.png'
    },
    {
      id: 4,
      title: 'Chi nhánh TP.HCM - Thủ Đức',
      description: 'Chi nhánh tại thành phố Thủ Đức, phục vụ khu vực phía Đông và các khu công nghệ cao.',
      icon: 'https://static.thenounproject.com/png/business-location-icon-582793-512.png'
    },
    {
      id: 5,
      title: 'Chi nhánh TP.HCM - Bình Thạnh',
      description: 'Chi nhánh tại quận Bình Thạnh, phục vụ khu vực trung tâm mở rộng.',
      icon: 'https://static.thenounproject.com/png/bank-icon-1646566-512.png'
    },
  ];

  const renderBranchItem = (branch, index) => (
    <View key={branch.id} style={styles.branchItem}>
      <Image
        source={{ uri: branch.icon }}
        style={styles.branchImage}
      />
      <View style={styles.branchTextContainer}>
        <Text style={styles.branchTitle}>{branch.title}</Text>
        <Text style={styles.branchDescription}>{branch.description}</Text>
      </View>
    </View>
  );

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
        {/* Branch in Hanoi Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Chi nhánh tại Hà Nội</Text>
          {hanoiBranches.map((branch, index) => renderBranchItem(branch, index))}
        </View>

        {/* Branches in Ho Chi Minh Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Chi nhánh tại TP. Hồ Chí Minh</Text>
          {hoChiMinhBranches.map((branch, index) => renderBranchItem(branch, index))}
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
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  branchItem: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  branchImage: {
    width: 80,
    height: 80,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginRight: 15,
    resizeMode: 'contain',
    padding: 10,
  },
  branchTextContainer: {
    flex: 1,
  },
  branchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  branchDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
});

export default BranchsScreen;
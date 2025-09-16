import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


const SubsidiaryScreen = ({ navigation }) => {
  // Dữ liệu mẫu (thay bằng props hoặc API)
  const subsidiaryData = {
    name: 'Photoism Subsidiary',
    slogan: 'Gallery - Photoism',
    description: 'Short description: Company introduction, vision, mission.',
    timeline: ['2015 – Company Established', '2018 – First Product Launch', '2020 – Expand to Korea & Vietnam', '2023 – Reach 1M+ Customers'],
    visionMission: 'Vision & Mission text here.',
    coreValues: 'Core Values: Innovation, Integrity, etc.',
    branches: [
      { name: 'Branch 1', desc: 'Brief introduction of the branch' },
      { name: 'Branch 2', desc: 'Brief introduction of the branch' }
    ],
    events: [
      { title: 'Event 1', desc: 'Has time, location, sample description of the event, and at the end a link to a page that describes the event in more detail.' },
      { title: 'Event 2', desc: 'Has time, location, simple introduction of the event with a link at the end to a page that describes the event.' },
      { title: 'Event 3', desc: 'Has time, location, simple introduction of the event that describes the event with a link to more detail.' }
    ],
    contactFranchise: {
      address: 'Address: Hanoi, Vietnam',
      phone: 'Phone: +84 123 456 789',
      email: 'email@photoism.co.kr',
      facebook: 'Facebook Link'
    },
    recruitment: [
      { position: 'Position to recruit 1', desc: 'Description' },
      { position: 'Position to recruit 2', desc: 'Description' }
    ],
    partners: [
      { title: 'Partner 1', desc: 'Description' },
      { title: 'Partner 2', desc: 'Description' },
      { title: 'Partner 3', desc: 'Description' }
    ]
  };

  const handleMenuPress = (item) => {
    if (item === 'Subsidiary') {
        navigation.navigate('Subsidiary');
      } else if (item === 'Branches') {
        navigation.navigate('Branches');
      } else if (item === 'News') {
        navigation.navigate('News');
      } else {
        alert(`Navigate to ${item}`);
      }
  };

  const handleLogoPress = () => {
    navigation.navigate('Home');
  };

  const handleLanguagePress = (lang) => {
    alert(`Switch to ${lang}`);
    setLanguageDropdownVisible(false);
  };





  const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);

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
      {/* Header giống photoism.co.kr: Fixed top, logo left, menu center, language right */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.logo} onPress={handleLogoPress}>
          <Text style={styles.logoText}>LOGO</Text>
        </TouchableOpacity>
        <View style={styles.menu}>
          {['Subsidiary', 'Branches', 'Partners', 'Projects', 'News'].map((item) => (
            <TouchableOpacity key={item} onPress={() => handleMenuPress(item)} style={styles.menuItemContainer}>
              <Text style={styles.menuItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => setLanguageDropdownVisible(!isLanguageDropdownVisible)}
            style={styles.headerButton}
          >
            <Text style={styles.buttonText}>Language</Text>
          </TouchableOpacity>
          {isLanguageDropdownVisible && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => handleLanguagePress('Korean')}>
                <Text style={styles.dropdownItem}>Korean</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLanguagePress('English')}>
                <Text style={styles.dropdownItem}>English</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image source={{ uri: 'https://via.placeholder.com/400x200?text=Banner+Image' }} style={styles.bannerImage} />
        <Text style={styles.companyName}>Company Name</Text>
        <Text style={styles.slogan}>Company Slogan</Text>
      </View>

      {/* Company Information */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Company Information</Text>
        <Text style={styles.description}>Short description: Company introduction, vision, mission.</Text>
      </View>

      {/* Historical Timeline */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Historical Timeline</Text>
        <Text style={styles.timelineItem}>2015 → Company Established</Text>
        <Text style={styles.timelineItem}>2018 → First Product Launch</Text>
        <Text style={styles.timelineItem}>2020 → Expand to Korea & Vietnam</Text>
        <Text style={styles.timelineItem}>2023 → Reach 1M+ Customers</Text>
      </View>

      {/* Method of Operation, Vision & Mission, Core Values (Grid row) */}
      <View style={styles.gridRow}>
        <View style={styles.gridItem}>
          <Text style={styles.gridTitle}>Method of operation</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridTitle}>Vision & Mission</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridTitle}>Core Values</Text>
        </View>
      </View>

      {/* Services Provided */}
      <Text style={styles.sectionTitle}>Services provided</Text>
      <View style={styles.servicesRow}>
        <View style={styles.screenshotContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/200x150?text=Screenshot' }} style={styles.screenshotImage} />
        </View>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceText}>Information company</Text>
        </View>
      </View>

      {/* Featured Projects */}
      <Text style={styles.sectionTitle}>Featured Projects</Text>
      <View style={styles.projectsGrid}>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Project 1</Text>
          <Text style={styles.projectDesc}>Has time, location, simple description of the event, and at the end a link to a page that describes the event in more detail.</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Project 2</Text>
          <Text style={styles.projectDesc}>Has time, location, simple introduction of the event, with a link at the end to a page that describes the event in more detail.</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Project 3</Text>
          <Text style={styles.projectDesc}>Has time, location, simple introduction of the event, with a link at the end to a page that describes the event in more detail.</Text>
        </View>
      </View>

      {/* News */}
      <Text style={styles.sectionTitle}>News</Text>
      <View style={styles.newsGrid}>
        <View style={styles.newsCard}>
          <Image source={{ uri: 'https://via.placeholder.com/150x100?text=Screenshot' }} style={styles.newsImage} />
          <Text style={styles.newsTitle}>Title</Text>
          <Text style={styles.newsDesc}>Information about news</Text>
        </View>
        <View style={styles.newsCard}>
          <Image source={{ uri: 'https://via.placeholder.com/150x100?text=Screenshot' }} style={styles.newsImage} />
          <Text style={styles.newsTitle}>Title</Text>
          <Text style={styles.newsDesc}>Information about news</Text>
        </View>
        <View style={styles.newsCard}>
          <Image source={{ uri: 'https://via.placeholder.com/150x100?text=Screenshot' }} style={styles.newsImage} />
          <Text style={styles.newsTitle}>Title</Text>
          <Text style={styles.newsDesc}>Information about news</Text>
        </View>
      </View>

      {/* Partners Information */}
      <Text style={styles.sectionTitle}>Partners Information</Text>
      <View style={styles.partnersGrid}>
        <View style={styles.partnerCard}>
          <Image source={{ uri: 'https://via.placeholder.com/100x80?text=Logo/Screenshot' }} style={styles.partnerImage} />
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerTitle}>Title</Text>
            <Text style={styles.partnerDesc}>Description</Text>
          </View>
        </View>
        <View style={styles.partnerCard}>
          <Image source={{ uri: 'https://via.placeholder.com/100x80?text=Logo/Screenshot' }} style={styles.partnerImage} />
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerTitle}>Title</Text>
            <Text style={styles.partnerDesc}>Description</Text>
          </View>
        </View>
        <View style={styles.partnerCard}>
          <Image source={{ uri: 'https://via.placeholder.com/100x80?text=Logo/Screenshot' }} style={styles.partnerImage} />
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerTitle}>Title</Text>
            <Text style={styles.partnerDesc}>Description</Text>
          </View>
        </View>
      </View>

      {/* Contact */}
      <Text style={styles.sectionTitle}>Contact</Text>
      <View style={styles.contactContainer}>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Address:</Text>
          <Text style={styles.contactValue}></Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Phone:</Text>
          <Text style={styles.contactValue}></Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactValue}></Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Facebook Link:</Text>
          <Text style={styles.contactValue}></Text>
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
    backgroundColor: '#f8f8f8',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  logo: { flex: 1 },
  logoText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  menu: { flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  menuItemContainer: {
    marginHorizontal: 15,
  },
  menuItem: { color: '#333', fontSize: 14 },
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
    textAlign: 'center',
  },
  banner: { height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' },
  bannerImage: { width: '100%', height: 150 },
  companyName: { fontSize: 24, fontWeight: 'bold', position: 'absolute', top: 20 },
  slogan: { fontSize: 16, position: 'absolute', bottom: 20 },
  card: { margin: 10, padding: 15, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 5 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 20, marginHorizontal: 10 },
  description: { fontSize: 14, color: '#666', textAlign: 'center' },
  timelineItem: { fontSize: 14, marginVertical: 2, textAlign: 'center' },
  gridRow: { flexDirection: 'row', justifyContent: 'space-around', margin: 10 },
  gridItem: { width: '30%', padding: 15, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 5, alignItems: 'center' },
  gridTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  servicesRow: { flexDirection: 'row', margin: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 5 },
  screenshotContainer: { flex: 1, padding: 10 },
  screenshotImage: { width: '100%', height: 120, backgroundColor: '#ddd' },
  serviceInfo: { flex: 1, padding: 10, justifyContent: 'center' },
  serviceText: { fontSize: 14, color: '#666' },
  projectsGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', margin: 10 },
  projectCard: { width: '30%', margin: 5, padding: 15, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, backgroundColor: '#fff' },
  projectTitle: { fontWeight: 'bold', marginBottom: 8, fontSize: 16 },
  projectDesc: { fontSize: 12, color: '#666', lineHeight: 16 },
  newsGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', margin: 10 },
  newsCard: { width: '30%', margin: 5, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, backgroundColor: '#fff' },
  newsImage: { width: '100%', height: 80, backgroundColor: '#ddd' },
  newsTitle: { fontWeight: 'bold', padding: 8, textAlign: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd' },
  newsDesc: { padding: 8, fontSize: 12, color: '#666', textAlign: 'center' },
  partnersGrid: { flexDirection: 'column', margin: 10 },
  partnerCard: { flexDirection: 'row', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, backgroundColor: '#fff' },
  partnerImage: { width: 80, height: 60, backgroundColor: '#ddd', marginRight: 10 },
  partnerInfo: { flex: 1, justifyContent: 'center' },
  partnerTitle: { fontWeight: 'bold', marginBottom: 4 },
  partnerDesc: { fontSize: 12, color: '#666' },
  contactContainer: { margin: 10, padding: 15, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, backgroundColor: '#fff' },
  contactRow: { flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  contactLabel: { width: 100, fontWeight: 'bold' },
  contactValue: { flex: 1 },
});

export default SubsidiaryScreen;
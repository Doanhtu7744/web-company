import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


const SubsidiaryScreen = ({ navigation }) => {

  // Sample data (replace with props or API)
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
      facebook: 'Facebook'
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
      } else if (item === 'Projects') {
        // Navigate to Home and scroll to Featured Projects section
        navigation.navigate('Home', { scrollToProjects: true });
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

  // Get branches data from Branches screen (same data structure)
  const hanoiBranches = [
    {
      id: 1,
      title: 'Hanoi Branch - Center',
      description: 'Main branch in Hanoi city center, serving customers in inner city area.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-1248845-512.png'
    },
    {
      id: 2,
      title: 'Hanoi Branch - Cau Giay',
      description: 'Branch in Cau Giay district, serving the western area of Hanoi.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-2847392-512.png'
    },
    {
      id: 3,
      title: 'Hanoi Branch - Dong Da',
      description: 'Branch in Dong Da district, serving the central-west area of Hanoi.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-1248845-512.png'
    },
    {
      id: 4,
      title: 'Hanoi Branch - Long Bien',
      description: 'Branch in Long Bien district, serving the area north of the Red River.',
      icon: 'https://static.thenounproject.com/png/branch-office-icon-3409543-512.png'
    },
  ];

  const hoChiMinhBranches = [
    {
      id: 1,
      title: 'Ho Chi Minh City Branch - District 1',
      description: 'Main branch in the city center, serving District 1 and central districts.',
      icon: 'https://static.thenounproject.com/png/building-icon-3739759-512.png'
    },
    {
      id: 2,
      title: 'Ho Chi Minh City Branch - District 3',
      description: 'Branch in District 3, serving the central area of Ho Chi Minh City.',
      icon: 'https://static.thenounproject.com/png/building-icon-2847392-512.png'
    },
    {
      id: 3,
      title: 'Ho Chi Minh City Branch - Binh Thanh',
      description: 'Branch in Binh Thanh district, serving the eastern area of the city.',
      icon: 'https://static.thenounproject.com/png/building-icon-1248845-512.png'
    },
    {
      id: 4,
      title: 'Ho Chi Minh City Branch - Thu Duc',
      description: 'Branch in Thu Duc city, serving the northeastern area and technology hub.',
      icon: 'https://static.thenounproject.com/png/building-icon-3409543-512.png'
    },
  ];

  // Select one branch from each city for display
  const branchesData = [
    hanoiBranches[0], // First Hanoi branch
    hoChiMinhBranches[0] // First Ho Chi Minh branch
  ];





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
      {/* Header similar to photoism.co.kr: Fixed top, logo left, menu center, language right */}
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
              <TouchableOpacity onPress={() => handleLanguagePress('Tiếng Việt')}>
                <Text style={styles.dropdownItem}>Tiếng Việt</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Text style={styles.companyName}>Company Name</Text>
        <View style={styles.banner}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2' }} style={styles.bannerImage} />
        </View>
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

      {/* Branches */}
      <Text style={styles.sectionTitle}>Branches</Text>
      <View style={styles.branchesGrid}>
        {branchesData.map((branch) => (
          <View key={branch.id} style={styles.branchCard}>
            <Image source={{ uri: branch.icon }} style={styles.branchImage} />
            <View style={styles.branchInfo}>
              <Text style={styles.branchName}>{branch.title}</Text>
              <Text style={styles.branchDescription}>{branch.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Featured Events */}
      <Text style={styles.sectionTitle}>Featured Events</Text>
      <View style={styles.projectsGrid}>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Event 1</Text>
          <Text style={styles.projectDesc}>Has time, location, simple description of the event, and at the end a link to a page that describes the event in more detail.</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Event 2</Text>
          <Text style={styles.projectDesc}>Has time, location, simple introduction of the event, with a link at the end to a page that describes the event in more detail.</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Event 3</Text>
          <Text style={styles.projectDesc}>Has time, location, simple introduction of the event, with a link at the end to a page that describes the event in more detail.</Text>
        </View>
      </View>

      {/* Recruitment */}
      <Text style={styles.sectionTitle}>Recruitment</Text>
      <View style={styles.recruitmentGrid}>
        <View style={styles.recruitmentCard}>
          <Text style={styles.recruitmentPosition}>Position to recruit</Text>
          <Text style={styles.recruitmentDescription}>Description</Text>
        </View>
        <View style={styles.recruitmentCard}>
          <Text style={styles.recruitmentPosition}>Position to recruit</Text>
          <Text style={styles.recruitmentDescription}>Description</Text>
        </View>
        <View style={styles.recruitmentCard}>
          <Text style={styles.recruitmentPosition}>Position to recruit</Text>
          <Text style={styles.recruitmentDescription}>Description</Text>
        </View>
        <View style={styles.recruitmentCard}>
          <Text style={styles.recruitmentPosition}>Position to recruit</Text>
          <Text style={styles.recruitmentDescription}>Description</Text>
        </View>
      </View>

      {/* Partners Information */}
      <Text style={styles.sectionTitle}>Partners Information</Text>
      <View style={styles.partnersGrid}>
        <View style={styles.partnerCard}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1521791055366-0d553872125f' }} style={styles.partnerImage} />
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerTitle}>Technology Partner</Text>
            <Text style={styles.partnerDesc}>Leading technology solutions and innovative digital services for modern businesses.</Text>
          </View>
        </View>
        <View style={styles.partnerCard}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' }} style={styles.partnerImage} />
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerTitle}>Business Partner</Text>
            <Text style={styles.partnerDesc}>Strategic business consulting and professional services to drive growth and success.</Text>
          </View>
        </View>
        <View style={styles.partnerCard}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' }} style={styles.partnerImage} />
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerTitle}>Creative Partner</Text>
            <Text style={styles.partnerDesc}>Creative design and marketing solutions to enhance brand presence and engagement.</Text>
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
          <Text style={styles.contactLabel}>Facebook:</Text>
          <Text style={styles.contactValue}></Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 150, // Increase padding to be able to scroll to the end
    paddingTop: 80, // Add padding top to avoid header covering content
    paddingHorizontal: '5%', // Match banner padding (90% width = 5% each side)
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
    textAlign: 'center',
  },
  bannerContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    marginBottom: 25
  },
  banner: {
    width: '98.5%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 10
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10
  },
  slogan: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10
  },
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 25
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    color: '#333',
    textAlign: 'center'
  },
  description: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22
  },
  timelineItem: {
    fontSize: 15,
    marginVertical: 4,
    textAlign: 'center',
    color: '#555',
    lineHeight: 20
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 15,
    gap: 12
  },
  gridItem: {
    flex: 1,
    padding: 18,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    minHeight: 80
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    lineHeight: 18
  },
  servicesRow: { flexDirection: 'row', margin: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 5 },
  screenshotContainer: { flex: 1, padding: 10 },
  screenshotImage: { width: '100%', height: 120, backgroundColor: '#ddd' },
  serviceInfo: { flex: 1, padding: 10, justifyContent: 'center' },
  serviceText: { fontSize: 14, color: '#666' },
  projectsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: 15,
    gap: 12
  },
  projectCard: {
    width: '30%',
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center'
  },
  projectTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 15,
    textAlign: 'center',
    color: '#333'
  },
  projectDesc: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    textAlign: 'center'
  },
  branchesGrid: {
    flexDirection: 'column',
    margin: 10
  },
  branchCard: {
    flexDirection: 'row',
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center'
  },
  branchImage: {
    width: 120,
    height: 80,
    backgroundColor: '#f0f0f0',
    marginRight: 15,
    borderRadius: 8,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  branchInfo: {
    flex: 1,
    justifyContent: 'center'
  },
  branchName: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 6,
    color: '#333'
  },
  branchDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  },
  recruitmentGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: 15,
    gap: 12
  },
  recruitmentCard: {
    width: '45%',
    margin: 5,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  recruitmentPosition: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
    color: '#333',
    textAlign: 'center'
  },
  recruitmentDescription: {
    fontSize: 13,
    color: '#666',
    minHeight: 80,
    textAlignVertical: 'top',
    lineHeight: 18,
    textAlign: 'center'
  },
  partnersGrid: { flexDirection: 'column', margin: 10 },
  partnerCard: { flexDirection: 'row', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, backgroundColor: '#fff' },
  partnerImage: { width: 80, height: 60, backgroundColor: '#f8f8f8', marginRight: 10, borderRadius: 5, resizeMode: 'cover' },
  partnerInfo: { flex: 1, justifyContent: 'center' },
  partnerTitle: { fontWeight: 'bold', marginBottom: 4 },
  partnerDesc: { fontSize: 12, color: '#666' },
  contactContainer: { margin: 10, padding: 15, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, backgroundColor: '#fff' },
  contactRow: { flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  contactLabel: { width: 100, fontWeight: 'bold' },
  contactValue: { flex: 1 },
});

export default SubsidiaryScreen;
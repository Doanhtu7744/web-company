import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CustomScrollView from '../components/CustomScrollView';
import { getTopThreeNews } from '../data/newsData';


const HomeScreen = ({ navigation, route }) => {
  const topThreeNews = getTopThreeNews();

  const scrollViewRef = useRef(null);
  const featuredProjectsRef = useRef(null);

  useEffect(() => {
    if (route.params?.scrollToProjects) {
      console.log('scrollToProjects parameter detected, will scroll after delay');
      const timeouts = [500, 1000, 1500];
      timeouts.forEach(delay => {
        setTimeout(() => {
          console.log(`Executing scrollToProjects after ${delay}ms delay`);
          scrollToProjects();
        }, delay);
      });
    }
  }, [route.params?.scrollToProjects]);

  const companyInfo = {
    name: 'Photoism',
    slogan: 'Gallery - Photoism',
    description: 'Short description: Company introduction, vision, mission.',
    timeline: ['2018 – Company Established', '2020 – First Product Launch', '2023 – Reach Korea & Vietnam'],
    visionMission: 'Vision & Mission text here.',
    coreValues: 'Core Values: Innovation, Integrity, etc.',
    services: 'Services provided description.',
    projects: [
      { title: 'Project 1', desc: 'Has time, location, simple description of the event with a link to the event page that describes the event in more detail.' },
      { title: 'Project 2', desc: 'Has time, location 2, simple introduction of the event with a link at the end to a page that describes the event.' },
      { title: 'Project 3', desc: 'Has time, location 3, simple introduction of the event that describes the event with a link to more detail.' }
    ],
    partners: [
      { title: 'Partner 1', desc: 'Description' },
      { title: 'Partner 2', desc: 'Description' },
      { title: 'Partner 3', desc: 'Description' }
    ],
    contact: {
      address: 'Address: Hanoi, Vietnam',
      email: 'email@photoism.co.kr',
      facebook: 'Facebook'
    }
  };

  const handleMenuPress = (item) => {
    if (item === 'Subsidiary') {
        navigation.navigate('Subsidiary');
      } else if (item === 'Branches') {
        navigation.navigate('Branches');
      } else if (item === 'News') {
        navigation.navigate('News');
      } else if (item === 'Projects') {
        scrollToProjects();
      } else {
        alert(`Navigate to ${item}`); 
      }
    };

  // Function to scroll to Featured Projects section
  const scrollToProjects = () => {
    console.log('scrollToProjects called, scrollViewRef.current:', scrollViewRef.current);
    if (scrollViewRef.current && featuredProjectsRef.current) {
      // Get screen dimensions
      const screenHeight = Dimensions.get('window').height;

      // Measure the Featured Projects section position
      featuredProjectsRef.current.measureLayout(
        scrollViewRef.current,
        (x, y, width, height) => {
          console.log('Featured Projects measured position:', { x, y, width, height });
          console.log('Screen height:', screenHeight);

          // Calculate offset to center the section on screen
          // Subtract half of screen height and add some offset for better centering
          const centeredPosition = Math.max(0, y - (screenHeight / 2) + (height / 2));

          console.log('Centered position:', centeredPosition);

          scrollViewRef.current.scrollTo({
            y: centeredPosition,
            animated: true
          });
        },
        (error) => {
          console.log('Error measuring Featured Projects position:', error);
          // Fallback to estimated position
          // Header (80px) + Banner (300px) + Company Info (~400px) + Services (~200px) = ~980px
          const featuredProjectsPosition = 980;
          const centeredPosition = Math.max(0, featuredProjectsPosition - (screenHeight / 2) + 100);
          scrollViewRef.current.scrollTo({
            y: centeredPosition,
            animated: true
          });
        }
      );
    } else {
      console.log('scrollViewRef.current or featuredProjectsRef.current is null');
      // Fallback method
      if (scrollViewRef.current) {
        const screenHeight = Dimensions.get('window').height;
        const featuredProjectsPosition = 980;
        const centeredPosition = Math.max(0, featuredProjectsPosition - (screenHeight / 2) + 100);
        scrollViewRef.current.scrollTo({
          y: centeredPosition,
          animated: true
        });
      }
    }
  };

  // Function to handle when clicking on news to navigate to News page with specific news
  const handleNewsPress = (newsId) => {
    navigation.navigate('News', { selectedNewsId: newsId });
  };

  const handleLanguagePress = (lang) => {
    alert(`Switch to ${lang}`);
    setLanguageDropdownVisible(false); // Close dropdown after selection
  };





  const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  return (
    <CustomScrollView
      ref={scrollViewRef}
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header similar to photoism.co.kr: Fixed top, logo left, menu center, language right */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.logo}>
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
          <Image source={{ uri: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29' }} style={styles.bannerImage} />
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

      {/* Services Provided */}
      <Text style={styles.sectionTitle}>Services provided</Text>
      <View style={styles.servicesRow}>
        <View style={styles.screenshotContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2' }} style={styles.screenshotImage} />
        </View>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceText}>Information company</Text>
        </View>
      </View>

      {/* Featured Projects (Grid) */}
      <View ref={featuredProjectsRef}>
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
      </View>

      {/* News (Grid) */}
      <Text style={styles.sectionTitle}>News</Text>
      <View style={styles.newsGrid}>
        {topThreeNews.map((news) => (
          <TouchableOpacity
            key={news.id}
            style={styles.newsCard}
            onPress={() => handleNewsPress(news.id)}
          >
            <Image source={{ uri: news.image }} style={styles.newsImage} />
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Text style={styles.newsDesc}>{news.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Partners Information (Grid) */}
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

      {/* Additional Content to ensure scrolling */}
      {/* <View style={styles.card}>
        <Text style={styles.cardTitle}>Additional Information</Text>
        <Text style={styles.cardText}>This is additional content to ensure the page has enough content to scroll.</Text>
        <Text style={styles.cardText}>You should be able to see a scrollbar on the right side of the screen.</Text>
        <Text style={styles.cardText}>The scrollbar will be visible when there is more content than can fit on the screen.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>More Content</Text>
        <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text style={styles.cardText}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text style={styles.cardText}>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Final Section</Text>
        <Text style={styles.cardText}>This is the final section to ensure scrolling works properly.</Text>
        <Text style={styles.cardText}>The scrollbar should be visible on the right side.</Text>
        <Text style={styles.cardText}>Try scrolling up and down to test the functionality.</Text>
      </View>

      <TouchableOpacity
        style={styles.testButton}
        onPress={() => navigation.navigate('ScrollTest')}
      >
        <Text style={styles.testButtonText}>🧪 Test Scrolling</Text>
      </TouchableOpacity> */}
    </CustomScrollView>
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
  servicesRow: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden'
  },
  screenshotContainer: {
    flex: 1,
    padding: 0
  },
  screenshotImage: {
    width: '100%',
    height: 140,
    backgroundColor: '#f0f0f0',
    resizeMode: 'cover'
  },
  serviceInfo: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  serviceText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500'
  },
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
  newsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: 15,
    gap: 12
  },
  newsCard: {
    width: '30%',
    margin: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden'
  },
  newsImage: {
    width: '100%',
    height: 90,
    backgroundColor: '#f0f0f0',
    resizeMode: 'cover'
  },
  newsTitle: {
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    fontSize: 14,
    color: '#333'
  },
  newsDesc: {
    padding: 12,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16
  },
  partnersGrid: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 15
  },
  partnerCard: {
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
  partnerImage: {
    width: 80,
    height: 60,
    backgroundColor: '#f8f8f8',
    marginRight: 15,
    borderRadius: 8,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  partnerInfo: {
    flex: 1,
    justifyContent: 'center'
  },
  partnerTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 16,
    color: '#333'
  },
  partnerDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18
  },
  contactContainer: {
    margin: 10,
    padding: 20,
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
  contactRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center'
  },
  contactLabel: {
    width: 120,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333'
  },
  contactValue: {
    flex: 1,
    fontSize: 15,
    color: '#666'
  },
  testButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  testButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LandingScreen = () => {
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.profile}>
          <View>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.nameText}>Hi James</Text>
          </View>
          <View style={styles.profilePic}>
            <Image
              source={require('../assests/profile.jpg')}
              style={styles.profilePic}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.autoWidth}>
            <View style={styles.card}>
              <View style={styles.container}>
                <View style={styles.row}>
                  <Image
                    source={require('../assests/profile.jpg')}
                    style={styles.profilePic}
                  />
                  <View style={{padding:8}}>
                    <Text style={styles.doctorName}>Dr. Satyam Watts</Text>
                    <Text style={styles.doctorTitle}>General Doctor</Text>
                  </View>
                </View>
                <Icon name="navigate-next" size={30} color="white" />
              </View>
              <View style={styles.divider} />
              <View style={styles.rowWithSpaceBetween}>
                <View style={styles.row}>
                  <Icon name="calendar-month" size={15} color="white" />
                  <Text style={styles.dateText}>Sunday, 12 June</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="query-builder" size ={15} color="white" />
                  <Text style={styles.dateText}>Sunday, 12 June</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.relative}>
            <TextInput
              placeholder="Search doctor or health issue"
              placeholderTextColor="#8696BB"
              style={[styles.input, styles.inputPadding]}
            />
            <Icon
              name="search"
              size={24}
              color="#8696BB"
              style={styles.searchIcon}
            />
          </View>
          <View style={styles.iconsRow}>
            <View>
              <View style={styles.iconWrapper}>
                <Icon name="coronavirus" size={30} color="#0d79ad" />
              </View>
              <Text style={styles.iconText}>CT-Scan</Text>
            </View>
            <View>
              <View style={styles.iconWrapper}>
                <Icon name="health-and-safety" size={30} color="#0d79ad" />
              </View>
              <Text style={styles.iconText}>MRI-Scan</Text>
            </View>
            <View>
              <View style={styles.iconWrapper}>
                <Icon name="link" size={30} color="#0d79ad" />
              </View>
              <Text style={styles.iconText}>Liver Scan</Text>
            </View>
            <View>
              <View style={styles.iconWrapper}>
                <Icon name="vaccines" size={30} color="#0d79ad" />
              </View>
              <Text style={styles.iconText}>Vaccination</Text>
            </View>
          </View>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Near Doctor</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.container}>
                <View style={styles.row}>
                  <Image
                    source={require('../assests/profile.jpg')}
                    style={styles.profilePic}
                  />
                  <View style={{padding:8}}>
                    <Text style={styles.nearDoctorName}>
                      Dr. Jackie Chan
                    </Text>
                    <Text style={styles.nearDoctorTitle}>
                      General Doctor
                    </Text>
                  </View>
                </View>
                <Text style={styles.distanceText}>1.2km</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.rowWithSpaceBetween}>
                <View style={styles.row}>
                  <Icon
                    name="calendar-month"
                    size={22}
                    style={styles.orangeText}
                  />
                  <Text style={[styles.orangeText, { paddingLeft: 3 }]}>Open at 17.00</Text>
                </View>
                <View style={styles.row}>
                  <Icon
                    name="query-builder"
                    size={22}
                    style={styles.blueText}
                  />
                  <Text style={[styles.blueText, { paddingLeft: 3 }]}>4.8 (120 reviews)</Text>
                </View>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.container}>
                <View style={styles.row}>
                  <Image
                    source={require('../assests/profile.jpg')}
                    style={styles.profilePic}
                  />
                  <View style={{padding:8}}>
                    <Text style={styles.nearDoctorName}>
                      Dr. Jackie Chan
                    </Text>
                    <Text style={styles.nearDoctorTitle}>
                      General Doctor
                    </Text>
                  </View>
                </View>
                <Text style={styles.distanceText}>1.2km</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.rowWithSpaceBetween}>
                <View style={styles.row}>
                  <Icon
                    name="calendar-month"
                    size={22}
                    style={styles.orangeText}
                  />
                  <Text style={[styles.orangeText, { paddingLeft: 3 }]}>Open at 17.00</Text>
                </View>
                <View style={styles.row}>
                  <Icon
                    name="query-builder"
                    size={22}
                    style={styles.blueText}
                  />
                  <Text style={[styles.blueText, { paddingLeft: 3 }]}>4.8 (120 reviews)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 24,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  greetingText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '500',
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
  },
  content: {
    paddingHorizontal: 25,
  },
  autoWidth: {
    height: 'auto',
    width: '100%',
  },
  card: {
    backgroundColor: '#0d79ad',
    padding: 12,
    borderRadius: 12,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  doctorTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  divider: {
    backgroundColor: 'white',
    height: 1,
    marginTop: 9,
    marginBottom: 9,
    marginHorizontal: 16,
  },
  rowWithSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 7,
  },
  dateText: {
    color: 'white',
    paddingLeft: 3,
  },
  relative: {
    position: 'relative',
    width: '100%',
  },
  input: {
    borderRadius: 8,
    paddingLeft: 35,
    width: '100%',
    marginTop: 20,
    backgroundColor: '#FAFAFA',
  },
  inputPadding: {
    paddingLeft: 40,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    zIndex: 1,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  iconWrapper: {
    backgroundColor: '#FAFAFA',
    padding: 16,
    borderRadius: 999,
  },
  iconText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#8696BB',
  },
  titleContainer: {
    marginTop: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
  cardContainer: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 12,
    marginVertical: 12,
  },
  nearDoctorName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  nearDoctorTitle: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '500',
  },
  distanceText: {
    color: 'black',
  },
  orangeText: {
    color: '#ff9900',
  },
  blueText: {
    color: '#0d79ad',
  },
});

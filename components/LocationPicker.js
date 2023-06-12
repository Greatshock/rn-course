import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { OutlinedButton } from './UI/OutlinedButton';
import { Colors } from '../constants/colors';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function LocationPicker() {
  const [location, setLocation] = useState();
  const [locationPermissions, requestPermission] = useForegroundPermissions();
  const navigation = useNavigation();

  async function verifyPermission() {
    if (locationPermissions.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();

      return response.granted;
    }

    if (locationPermissions.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permissions to use this app.'
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) return;

    const loc = await getCurrentPositionAsync();
    setLocation({
      lat: loc.coords.latitude,
      lng: loc.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate('Map');
  }

  let locationContent = <Text>No location picked yet.</Text>;
  if (location) {
    // link to map goes here
    locationContent = <Image source={{ uri: '' }} />;
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationContent}</View>
      <View style={styles.actions}>
        <OutlinedButton onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    marginVertical: 8,
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

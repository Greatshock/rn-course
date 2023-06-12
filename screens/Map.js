import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export function Map() {
  const region = {
    latitude: 37.78,
    longtitude: -122.4,
    latitudeDelta: 0.0922,
    longtitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PlaceItem } from './PlaceItem';
import { Colors } from '../constants/colors';

export function PlacesList({ places }) {
  if (!places?.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.primary200,
  },
});

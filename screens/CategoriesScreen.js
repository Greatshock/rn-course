import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';

export function CategoriesScreen({ navigation }) {
  function pressHandler(category) {
    navigation.navigate('MealsOverview', { categoryId: category.id });
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={pressHandler.bind(this, item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

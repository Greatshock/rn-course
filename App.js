import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RecentExpensesScreen } from './screens/RecentExpensesScreen';
import { AllExpensesScreen } from './screens/AllExpensesScreen';
import { ManageExpenseScreen } from './screens/ManageExpenseScreen';

import { GlobalStyles } from './constants/styles';
import { IconButton } from './components/UI/IconButton';
import { ExpensesContextProvider } from './store/expenses-context';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}
    >
      <Tabs.Screen
        name='Recent'
        component={RecentExpensesScreen}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' color={color} size={size} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='AllExpenses'
        component={AllExpensesScreen}
        options={{
          title: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={size} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <View style={styles.appContainer}>
        <ExpensesContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500,
                },
                headerTintColor: 'white',
              }}
            >
              <Stack.Screen
                name='BottomTabs'
                component={BottomTabsScreen}
                options={{ headerShown: false }}
              ></Stack.Screen>
              <Stack.Screen
                name='ManageExpense'
                component={ManageExpenseScreen}
                options={{ presentation: 'modal' }}
              ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </ExpensesContextProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

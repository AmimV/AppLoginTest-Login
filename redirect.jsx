import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Adicione outras telas aqui */}
    </Stack.Navigator>
  );
};

export default AppNavigator;


import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="Job"
        options={{
          title: 'Job',
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="home" color={color} />,
          tabBarLabelStyle: { fontSize: 18, bottom: 8 },
          tabBarIconStyle: { bottom: 5 },
        }}
      />
      <Tabs.Screen 
        name="Bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bookmark" color={color} />,
          tabBarLabelStyle: { fontSize: 18, bottom: 8 },
          tabBarIconStyle: { bottom: 5 },
        }}
      />
    </Tabs>
  );
}

import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface DataItem {
  key: string;
  job: string;
}

const data: DataItem[] = [
  { key: '1', job: 'Book Labs' },
  { key: '2', job: 'Schedule Lab' },
  { key: '3', job: 'Upcoming Appointment' },
];

const items = data; // Your array of items
const _colors = {
  active: '#FAFAFA',
  inactive: '#63B4FF1A',
};

const _spacing = 14;

const LabScreen: React.FC = () => {
  const [zoomedItem, setZoomedItem] = useState<string | null>(null);

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
        <FlatList
          style={{ flexGrow: 0 }}
          data={items}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ paddingLeft: _spacing }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              onPressIn={() => setZoomedItem(item.key)}
              onPressOut={() => setZoomedItem(null)}
              onPress={() => {
                // Handle item press
              }}
            >
              <View
                style={[
                  styles.button,
                  zoomedItem === item.key && styles.buttonZoomed
                ]}
              >
                <Text style={{ color: '#4894FE', fontWeight: '700' }}>
                  {item.job}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: _spacing,
    padding: _spacing,
    paddingHorizontal: 72,
    borderRadius: 25,
    backgroundColor: _colors.inactive,
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
  },
  buttonZoomed: {
    transform: [{ scale: 1.5 }],
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
});

export default LabScreen;

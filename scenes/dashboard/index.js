import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function DashboardScene({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button
        title={'Show artists'}
        onPress={() => {
          navigation.navigate ('Artists');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

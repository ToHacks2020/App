import React from 'react';
import {StyleSheet, ScrollView, View, Text, SectionList} from 'react-native';

export default class didYouKnow extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            
            {
              title: '5 Richest People In The World',
              data: [
                'Jeff Bezos',
                'Bill Gates',
                'Bernard Arnault',
                'Warren Buffet',
                'Larry Ellison',
              ],
            },
            {
              title: 'Top Google Seaches in 2018',
              data: [
                'World Cup',
                'Avicii',
                'Mac Miller',
                'Stan Lee',
                'Black Panther',
              ],
            },
            {
              title: 'Top Searched Movies of 2018',
              data: [
                'Black Panther',
                'Dead Pool 2',
                'Venom',
                'Avengers: Infinity War',
                'Bohemian Rhapsody',
              ],
            },
            {
              title: 'Top Searched Athletes of 2018',
              data: [
                'Tristan Thompson',
                'Alexis Sánchez',
                'Lindsey Vonn',
                'Shaun White',
                'Khabib Nurmagomedov',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#1D2DDA',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
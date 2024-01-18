import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-native-shared-element';
import Foods, { tabs, popularFood, ORANGE } from './Foods';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('screen');
export const SPACING = 20;

export const CELL_WIDTH = width * 0.64;
const CELL_HIGHT = CELL_WIDTH * 1.4;
const FULL_SIZE = CELL_WIDTH + SPACING * 2;


export default function Foodlist({ navigation }) {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={tabs}
          keyExtractor={(item, index) => `${item} -${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          //  scrollEnabled={false}
          renderItem={({ item: tab }) => {
            return (
              <TouchableOpacity onPress={() => setSelectedTab(tab)}>
                <View
                  style={[styles.pill,
                  {
                    backgroundColor: selectedTab === tab ? ORANGE : 'transparent'
                  },
                  ]}>
                  <Text styles={[styles.pillText, {
                    color: selectedTab === tab ? 'white' : '#000'
                  }]}>{tab}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />

        <FlatList
          data={Foods}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate='fast'
          renderItem={({ item, index }) => {
           
            return (
              <TouchableOpacity onPress={() => navigation.navigate('FoodDetails', { item })} key={item.key} style={{ width: CELL_WIDTH, height: CELL_HIGHT }}>
                <View style={{ flex: 1, margin: SPACING, padding: SPACING, justifyContent: 'center' }} >
                  
                  <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject]}>
                    <View
                      style={[
                        StyleSheet.absoluteFillObject,
                        { backgroundColor: item.color, borderRadius: 16 }
                      ]}
                    />
                  </SharedElement>

                  <SharedElement id={`item.${item.key}.meta`} style={[StyleSheet.absoluteFillObject]}>
                    <View style={{ position: 'absolute', left: SPACING, top: SPACING }}>
                      <Text style={styles.type}>{item.type}</Text>
                      <Text style={styles.subType}>{item.subType}</Text>
                    </View>
                  </SharedElement>

                  <SharedElement id={`item.${item.key}.image`} style={[StyleSheet.absoluteFillObject]}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                  </SharedElement>

                </View>
              </TouchableOpacity>
            )
          }}
        />



        <FlatList
          data={popularFood}
          scrollEnabled={false}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: SPACING }}>
                <Image source={{ uri: item.image }} style={styles.popularImage} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.popularType}>{item.type}</Text>
                  <View style={{ flexDirection: 'row' }}>

                    <Icon name="star" size={16} color="#FB9806" style={{ paddingRight: 10 }} />
                    <Text style={{ fontWeight: '700' }}>{item.rating}</Text>
                  </View>
                </View>
                <Text style={styles.popularPrize}>{item.price}</Text>
              </View>
            )
          }}
        />

      </SafeAreaView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
    borderRadius: 12,
    marginTop: SPACING,
    marginBottom: SPACING
  },
  pillText: {
    fontWeight: '800',
    color: '#000'

  },
  popularImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: SPACING
  },
  popularType: {
    fontWeight: '800',
    fontSize: 16,

  },
  popularPrize: {
    // alignSelf: 'flex-end',
    fontWeight: '800',
    textAlign: 'right'
  },

  type: {
    fontWeight: '800',
    fontSize: 22
  },

  subType: {
    fontSize: 12,
    opacity: 0.8
  },
  image: {
    width: CELL_WIDTH * 0.7,
    height: CELL_WIDTH * 0.7,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',
    marginTop:SPACING*4
  },

})
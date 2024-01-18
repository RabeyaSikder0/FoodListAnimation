import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SalonList from './SalonList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { detailsIcons } from './Salon';
import { SharedElement } from 'react-native-shared-element';

import * as Animatable from 'react-native-animatable';
const DURATION = 400;

const { width, height } = Dimensions.get('screen');
const SPACING = 20;
const ITEM_HEIGHT = height * 0.18;
const TOP_HEADER_HEIGHT = height * 0.3;


const SalonListDetails = ({ navigation, route }) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Icon name='arrow-left' size={28} style={{
                padding: 'absolute',
                position: 'absolute',
                top: SPACING * 2,
                left: SPACING,
                zIndex: 2,
            }}

                color={'#333'}
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <View style={{ flex: 1, padding: SPACING }}>
                
             <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject]}>
                <View style={[StyleSheet.absoluteFillObject,
                {
                    backgroundColor: item.color,
                    borderRadius: 0,
                    height: TOP_HEADER_HEIGHT + 32
                }]}
                />
                </SharedElement>

                    <SharedElement id={`item.${item.key}.name`} style={styles.fullName} >
                        <Text>{item.name}</Text>
                    </SharedElement>

                    <SharedElement id={`item.${item.key}.image`} style={styles.image}>
                        <Image source={{ uri: item.image }} />
                    </SharedElement>

                    <SharedElement id='general.bg' style={styles.bg}>
                        <View>
                            <ScrollView>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    {detailsIcons.map((detail, index) => {
                                        return (
                                            <Animatable.View
                                                animation='bounceIn'
                                                delay={DURATION + index * 100}
                                                key={`${detail.icon}-${index}`}
                                                style={{
                                                    backgroundColor: detail.color,
                                                    height: 64,
                                                    width: 64,
                                                    borderRadius: 32,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                <Icon name={detail.icon} color={'white'} size={22} />
                                            </Animatable.View>
                                        )
                                    })}
                                </View>
                                <View>
                                    {item.categories.map((categories, index) => {
                                        return (
                                            <Animatable.View
                                                animation='fadeInUp'
                                                delay={DURATION * 2 + index * 100}
                                                key={categories.key}
                                                style={{ marginVertical: SPACING }}>
                                                <Text style={styles.title}>{categories.title}</Text>
                                                {categories.subcats.map((subcats, index) => {
                                                    return (
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <View
                                                                style={{
                                                                    height: 8,
                                                                    width: 8,
                                                                    borderRadius: 4,
                                                                    backgroundColor: 'gold',
                                                                    marginLeft: SPACING
                                                                }}
                                                            />
                                                            <Text style={styles.subTitle}>{subcats}</Text>
                                                        </View>
                                                    )
                                                })}
                                            </Animatable.View>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                    </SharedElement>
                </View>
          
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullName: {
        fontWeight: '700',
        fontSize: 18,
        position: 'absolute',
        left: SPACING*2,
        top: TOP_HEADER_HEIGHT - SPACING*2
    },

    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'contain',
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - ITEM_HEIGHT*10,
        right: SPACING
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'white',
        transform: [{ translateY: TOP_HEADER_HEIGHT}],
        borderRadius: 25,
        padding: SPACING,
        paddingTop: 32 + SPACING
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: SPACING,
    },
    subTitle: {
        fontSize: 15,
        margin: 8,
        opacity: 0.8
    }
});



export default SalonListDetails

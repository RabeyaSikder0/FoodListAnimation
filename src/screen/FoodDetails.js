import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-native-shared-element';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SPACING } from './Foodlist';
import { CELL_WIDTH } from './Foodlist';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('screen');

const DURATION = 400;

const animation = {
    0: { opacity: 0, translateY: 100 },
    1: { opacity: 1, translateY: 0 },
}

const createAnimation = (from) => ({
    0: { opacity: 0, translateY: -100, translateX: from },
    1: { opacity: 1, translateY: 0, translateX: 0 },
});

const animations = [
    createAnimation(100),
    createAnimation(0),
    createAnimation(-100),
];

const FoodDetails = ({ navigation, route }) => {
    const { item } = route.params;
    // console.log(item);

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject]}>
                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]} />
            </SharedElement>

            <SharedElement id={`item.${item.key}.meta`} style={[StyleSheet.absoluteFillObject]}>
                <View style={{ position: 'absolute', left: SPACING, top: SPACING * 2 }}>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.subType}>{item.subType}</Text>
                </View>
            </SharedElement>


            <View style={{ marginTop: height * 0.1 }}>

                <SharedElement id={`item.${item.key}.image`} style={[StyleSheet.absoluteFillObject]}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </SharedElement>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: SPACING, marginTop: height * 0.4}}>
                    {item.subcategories.map((subcategories, index) => {
                        return (
                            <Animatable.View
                                useNativeDriver
                                animation={animations[index]}
                                iterationCount={10}
                                duration={DURATION}
                                key={subcategories.key}

                                style={{
                                    backgroundColor: `${item.fullcolor}`,
                                    padding: SPACING,
                                    borderRadius: 30,
                                }}>
                                <Image source={{ uri: subcategories.image }} style={{ height: 18, width: 18, resizeMode: 'contain' }} />
                            </Animatable.View>
                        )
                    })}
                </View>
            </View>

            <Icon name='close' style={{
                padding: SPACING,
                position: 'absolute',
                top: SPACING,
                right: SPACING,
                zIndex: 2
            }}
                size={28}
                color={'#333'}
                onPress={() => {
                    navigation.goBack();
                }}
            />

            <View style={{ left: SPACING, top: SPACING }}>
                <Animatable.Text
                    useNativeDriver
                    animation={animation}
                    delay={DURATION + 300}
                    style={{ fontSize: 28, fontWeight: '700', marginBottom: SPACING }}>
                    {item.price}
                </Animatable.Text>

                <Animatable.Text
                    useNativeDriver
                    animation={animation}
                    delay={DURATION + 400}
                    style={{ fontSize: 14, lineHeight: 20, opacity: 0.7, color: '#000' }}>
                    {item.description}
                </Animatable.Text>

            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    type: {
        fontWeight: '800',
        fontSize: 22
    },

    subType: {
        fontSize: 12,
        opacity: 0.8
    },
    image: {
        zIndex: 2,
        width: CELL_WIDTH * 0.7,
        height: CELL_WIDTH * 0.7,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: SPACING * 2

    },
});

FoodDetails.SharedElements=(route, otherRoute, showing)=>{
    const {item} = route.params;

    return[
        {
            id:`item.${item.key}.bg`,
        },
        {
            id: `item.${item.key}.meta`
        },
        {
            id:`item.${item.key}.image`,
        }
    ];
}


export default FoodDetails

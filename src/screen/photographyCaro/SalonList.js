import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions

} from 'react-native';
import salon from './Salon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-native-shared-element';

const {width, height} = Dimensions.get('screen');

const SPACING = 20;
const ITEM_HEIGHT= height*0.18;

const SalonList = ({ navigation }) => {

    return (
    
            <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={salon}
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={{padding: SPACING}}
                        renderItem={({ item, index }) => {

                            return (
                                <TouchableOpacity  key={item.id} onPress={() => {
                                    navigation.navigate('SalonListDetails', {item})
                                 }} 
                                 style={{marginBottom: SPACING, height: ITEM_HEIGHT}}
                                 >
                                    <View style={{ flex: 1, padding: SPACING }} key={item.key}>

                                        <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject]}>
                                        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius:8}]} />
                                        </SharedElement>

                                        <SharedElement id={`item.${item.key}.name`} style={styles.fullName}>
                                           <Text style={styles.fullName}>{item.fullName}</Text>
                                        </SharedElement>

                                        <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                                        <SharedElement id={`item.${item.key}.image`} style={styles.image}>
                                            <Image source={{uri: item.image}} style={styles.image}/>
                                        </SharedElement>
                                    </View>

                                </TouchableOpacity>
                            )
                        }}
                    />

                    <SharedElement id='general.bg'>
                        <View style={styles.bg}>
                            <Text>Content</Text>
                        </View>
                    </SharedElement>
                        
                </SafeAreaView>
         
       
    )
}

const styles = StyleSheet.create({
    name:{
        fontWeight:'700',
        fontSize:18,
    },

    jobTitle:{
        fontSize:11,
        opacity: 0.7,
    },

    image:{
        width: ITEM_HEIGHT*0.8,
        height: ITEM_HEIGHT*0.8,
        resizeMode:'contain',
        position:'absolute',
        bottom:0,
        right: SPACING
    },
    bg:{
        position:'absolute',
        width,
        height,
        backgroundColor:'red',
        transform:[{translateY: height}],
        borderRadius:32
    }
});

SalonList.SharedElements=(route, otherRoute, showing)=>{

    const {item} = route.params;
    return[
            {id:`item.${item.key}.image`},
            {id: `item.${item.key}.bg`},
            {id: `item.${item.key}.name`},
            {id: 'general.bg'}
           
        ];
        
    };

export default SalonList

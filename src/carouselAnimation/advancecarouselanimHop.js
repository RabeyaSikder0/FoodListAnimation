import *as React from 'react';
import {
    StatusBar,
    Animated,
    Text,
    Image,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];

const DATA = [
    {
        "key": "3571572",
        "title": "Multi-lateral intermediate moratorium",
        "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
        "image": "https://cdn-icons-png.flaticon.com/128/7427/7427144.png"
    },
    {
        "key": "3571747",
        "title": "Automated radical data-warehouse",
        "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
        "image": "https://cdn-icons-png.flaticon.com/128/4219/4219726.png"
    },
    {
        "key": "3571680",
        "title": "Inverse attitude-oriented system engine",
        "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
        "image": "https://cdn-icons-png.flaticon.com/128/9246/9246367.png"
    },
    {
        "key": "3571603",
        "title": "Attitude-oriented system engine",
        "description": "We need to program the open-source IB interface!",
        "image": "https://cdn-icons-png.flaticon.com/128/3572/3572098.png"
    }
];


const Indicator = ({ scrollX }) => {
    return (
        <View style={{ position: 'absolute', bottom: 100, flexDirection: 'row' }}>
            {DATA.map((_, i) => {
                const inputRange =[(i-1) * width,  i*width, (i+1)*width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate:'clamp'
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.6, 0.9, 0.6],
                    extrapolate:'clamp',
                })
                return (
                    <Animated.View
                        key={`indicator-${i}`}
                        style={{
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            backgroundColor: '#333',
                            margin: 10,
                            opacity,
                            transform:[{
                                scale
                            }]
                        }}
                    />
                )
            })}
        </View>
    )
}

const Backdrop = ({ scrollX }) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i*width),
        outputRange: bgs.map((bg)=>bg),
    });

    return <Animated.View
        style={[StyleSheet.absoluteFillObject,
        {
            backgroundColor,
        }
        ]}
    />
}


const Square = ({scrollX})=>{
    const Yolo = Animated.modulo(
        Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
        1
    );
    const rotate= Yolo.interpolate({
        inputRange:[0, .5, 1],
        outputRange:['35deg', '0deg', '35deg']
    });

    const translateX = Yolo.interpolate({
        inputRange:[0, 0.5, 1],
        outputRange:[0, -height, 0]
    });
    return(
        <Animated.View 
            style={{
                width: height,
                height: height,
                backgroundColor:'#fff',
                borderRadius: 86,
                position:'absolute',
                top: -height*0.6,
                left: -height*0.3,
                transform:[
                    {
                        rotate,
                    },
                    {
                        translateX
                    }
                ]
            }}
        />
    )
}
const App = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <Backdrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                pagingEnabled
                data={DATA}
                keyExtractor={(item) => item.key}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                horizontal
                scrollEventThrottle={32}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 0.7, justifyContent: 'center', padding: 20 }}>
                                <Image source={{ uri: item.image }} style={{
                                    width: width / 2,
                                    height: width / 2,
                                    resizeMode: 'contain',
                                }} />
                            </View>

                            <View style={{ flex: 0.3 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10, color: 'black' }}>{item.title}</Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.description}</Text>
                            </View>
                        </View>
                    )
                }

                }
            />
            <Indicator scrollX={scrollX} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default App

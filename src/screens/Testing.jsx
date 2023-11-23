import React, { useEffect, useState } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { newClient } from '../mqtt/openrc-client'
import MQTT from 'sp-react-native-mqtt'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        minHeight: '100%',
    },
    header: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 40,
        paddingRight: 40,
    },
    header2: {
        flex: 1,
        minHeight: 100,
        paddingTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 20,
    },
    "header-background": {
        backgroundColor: '#860A35',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: 300,
        position: 'absolute',
        width: 400,
    },
    "header-title": {
        marginBottom: 50,
    },
    subtitle: {
        fontSize: 15,
        color: '#F3F3F3',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F3F3F3',
    },
    setting: {
        top: '10%',
        left: '90%',
        position: 'absolute',
    },
    "header-subcard": {
        height: 100,
        borderRadius: 50,
        backgroundColor: '#AF2655',
        overflow: 'hidden',
        position: 'absolute',
        top: 160,
        left: '14%',
        right: '14%',
        width: '96%',
    },
    "header-card": {
        paddingTop: 30,
        borderRadius: 40,
        backgroundColor: '#A3B763',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        width: '100%',
        minHeight: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Testing = () => {
    const [temp, setTemp] = useState(90.0)
    const [humid, setHumid] = useState(90.0)
    const [img, setImg] = useState('')
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mclient, setMClient] = useState(null)

    async function initMQTTClient() {
        const client = await MQTT.createClient({
            uri: 'mqtt://pakwahyu.my.id:1883',
            clientId: 'your_client_id'
        })
        client.on('closed', function () {
            console.log('mqtt.event.closed');
        });

        client.on('error', function (msg) {
            console.log('mqtt.event.error', msg);
        });

        client.on('message', function (msg) {
            console.log('mqtt.event.message', msg);
            switch (msg.topic) {
                case 'fd/humid':
                    setHumid(parseFloat(msg.data))
                    console.log(temp)
                    break
                case 'fd/temp':
                    setTemp(parseFloat(msg.data))
                    console.log(temp)
                    break
                case 'fd/send':
                    setImg(decodeURIComponent(msg.data))
                    break
                default:
                    break
            }
        });

        client.on('connect', function () {
            setMClient(client)
            console.log('connected');
            client.subscribe('fd/send', 0);
            client.subscribe('fd/humid', 0);
            client.subscribe('fd/temp', 0);
            client.publish('fd/temp', "50.0", 0, false);
        });

        client.connect();

        return client
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        const client = initMQTTClient()

        return () => {
            clearInterval(interval)
            console.log('Cleanup')
        }
    }, []);

    const props = {
        activeStrokeWidth: 25,
        inActiveStrokeWidth: 25,
        inActiveStrokeOpacity: 0.2
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles['header-background']} />
                <View style={styles['header-subcard']} />
                <View style={styles['header-title']}>
                    <Text style={styles.subtitle}>{currentTime.toLocaleTimeString()}</Text>
                    <Text style={styles.title}>Food Dehydrator Dashboard</Text>
                    <Icon style={styles.setting}name="gear" size={25} color="white"/>
                </View>
                <View style={styles['header-card']}>
                    <View style={{ flex: 1 }}>
                        <CircularProgressBase
                            {...props}
                            value={temp}
                            radius={125}
                            activeStrokeColor={'#e84118'}
                            inActiveStrokeColor={'#e84118'}
                        >
                            <CircularProgressBase
                                {...props}
                                value={humid}
                                radius={100}
                                activeStrokeColor={'#badc58'}
                                inActiveStrokeColor={'#badc58'}
                            >
                            </CircularProgressBase>
                        </CircularProgressBase>
                    </View>
                </View>
            </View>
            <View style={styles.header2}>
                <Card style={styles.card}>
                    <Card.Content style={styles.cardCircleContent}>
                        <Text style={styles.label}>LIVE</Text>
                        {/* <Image style={{ width: '100%', height: '100%', borderWidth: 1, borderColor: 'red' }} source={{ uri: img }} /> */}
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    )
}
export default Testing
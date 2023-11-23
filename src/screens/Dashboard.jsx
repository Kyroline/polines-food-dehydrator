import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { connectMQTT, subscribeToTopic, disconnectMQTT, sendMessage } from '../mqtt/paho-client'

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const option = {
    host: 'pakwahyu.my.id',
    port: 1883,
    path: '/mqtt',
    clientId: 'id-kikideviceweehee'
}

const Dashboard = () => {
    const [temp, setTemp] = useState(0.0)
    const [humid, setHumid] = useState(0.0)
    const [client, setClient] = useState(null)
    const [img, setImg] = useState('')

    // useEffect(() => {
    //     const client = connectMQTT()

    //     subscribeToTopic(client, 'temperature123123123', (message) => {
    //         if (message.destinationName == 'temperature123123123') {
    //             setTemp(message.payloadString)
    //         }
    //     })

    //     return () => { disconnectMQTT(client) }
    // }, [])

    useEffect(() => {
        const setupMQTT = async () => {
            try {
                const newClient = await connectMQTT();
                setClient(newClient)
                subscribeToTopic(newClient, 'fd/send', (message) => {
                    if (message.destinationName == 'fd/send') {
                        // setTemp(Number(message.payloadString));
                        setImg(decodeURIComponent(message.payloadString))
                    }
                    if (message.destinationName == 'fd/humid') {
                        setHumid(Number(message.payloadString))
                    }
                    if (message.destinationName == 'fd/temp') {
                        setTemp(Number(message.payloadString))
                    }
                });
                subscribeToTopic(newClient, 'fd/humid', (message) => {
                    if (message.destinationName == 'fd/send') {
                        // setTemp(Number(message.payloadString));
                        setImg(decodeURIComponent(message.payloadString))
                    }
                    if (message.destinationName == 'fd/humid') {
                        setHumid(Number(message.payloadString))
                    }
                    if (message.destinationName == 'fd/temp') {
                        setTemp(Number(message.payloadString))
                    }
                });
                subscribeToTopic(newClient, 'fd/temp', (message) => {
                    if (message.destinationName == 'fd/send') {
                        // setTemp(Number(message.payloadString));
                        setImg(decodeURIComponent(message.payloadString))
                    }
                    if (message.destinationName == 'fd/humid') {
                        setHumid(Number(message.payloadString))
                    }
                    if (message.destinationName == 'fd/temp') {
                        setTemp(Number(message.payloadString))
                    }
                });
            } catch (error) {
                console.error('MQTT Connection Error:', error);
            }
        }

        setupMQTT();

        return () => { disconnectMQTT(client) }
    }, []);

    return (
        <ScrollView style={{ padding: 30 }}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardCircleContent}>
                    <Text style={styles.label}>Oven Temperature</Text>
                    <AnimatedCircularProgress
                        size={200}
                        width={15}
                        backgroundWidth={5}
                        fill={temp}
                        tintColor="#00ff00"
                        tintColorSecondary="#ff0000"
                        backgroundColor="#3d5875"
                        arcSweepAngle={240}
                        rotation={240}
                        lineCap="round"
                    >
                        {fill => <Text style={styles.points}>{temp} C</Text>}
                    </AnimatedCircularProgress>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content style={styles.cardCircleContent}>
                    <Text style={styles.label}>Humidity</Text>
                    <AnimatedCircularProgress
                        size={200}
                        width={15}
                        backgroundWidth={5}
                        fill={humid}
                        tintColor="#00ff00"
                        tintColorSecondary="#ff0000"
                        backgroundColor="#3d5875"
                        arcSweepAngle={360}
                        rotation={360}
                        lineCap="round"
                    >
                        {fill => <Text style={styles.points}>{humid}%</Text>}
                    </AnimatedCircularProgress>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content style={styles.cardCircleContent}>
                    <Text style={styles.label}>LIVE</Text>
                    {/* <Image source={{uri: `${img}`}}/> */}
                    <Image style={{ width: 240, height: 180, borderWidth: 1, borderColor: 'red' }} source={{ uri: img }} />
                </Card.Content>
            </Card>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
    },
    cardCircle: {
        borderRadius: 100,
        width: 140,
        height: 140,
        backgroundColor: "red",
        elevation: 10,
    },
    cardCircleContent: {
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50
    },
    points: {
        textAlign: 'center',
        color: '#7591af',
        fontSize: 50,
        fontWeight: '100',
    },
    label: {
        textAlign: 'center',
        color: '#7591af',
        fontSize: 25,
        paddingBottom: 25
    }
});

export default Dashboard
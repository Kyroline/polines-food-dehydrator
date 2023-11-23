// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Client, Message } from 'react-native-paho-mqtt';


// export const connectMQTT = () => {
//     // Uncomment salah satu sesuai kebutuhan
//     // const client = new Client({ uri: 'wss://test.mosquitto.org:8081/mqtt', clientId: 'clientId' + Math.random(), storage: AsyncStorage });
//     // const client = new Client({ uri: 'ws://test.mosquitto.org:8080/mqtt', clientId: 'clientId' + Math.random(), storage: AsyncStorage });
//     // const client = new Client({ uri: 'mqtt://test.mosquitto.org:1883/mqtt', clientId: 'clientId' + Math.random(), storage: AsyncStorage });
//     // const client = new Client({ uri: 'mqtts://test.mosquitto.org:8883/mqtt', clientId: 'clientId' + Math.random(), storage: AsyncStorage });
//     const client = new Client({ uri: 'ws://pakwahyu.my.id:8080/mqtt', clientId: 'clientId' + Math.random(), storage: AsyncStorage });
//     // const client = new Client({ uri: 'mqtt://pakwahyu.my.id:1883/mqtt/', clientId: 'clientId' + Math.random(), storage: AsyncStorage });

//     return new Promise((resolve, reject) => {
//         client.on('connectionLost', (responseObject) => {
//             if (responseObject.errorCode !== 0) {
//                 reject(responseObject.errorMessage)
//             }
//         })

//         client.connect()
//             .then(() => {
//                 console.log('MQTT Connected')
//                 resolve(client)
//             })
//             .catch((responseObject) => {
//                 if (responseObject.errorCode !== 0) {
//                     reject(responseObject.errorMessage)
//                 }
//             })
//     })
// }

// // export const connectMQTT = () => {
// //     const client = new Client({ uri: 'ws://test.mosquitto.org:8080/mqtt', clientId: 'clientId' + Math.random(), storage: AsyncStorage });

// //     client.on('connectionLost', (responseObject) => {
// //         if (responseObject.errorCode !== 0) {
// //             console.log(responseObject.errorMessage)
// //         }
// //     })

// //     client.connect()
// //         .then(() => {
// //             console.log('MQTT Connected')
// //         })
// //         .catch((responseObject) => {
// //             if (responseObject.errorCode !== 0) {
// //                 console.log('onConnectionLost:' + responseObject.errorMessage);
// //             }
// //         })

// //     return client
// // }

// export const subscribeToTopic = (client, topic, callback) => {
//     client.subscribe(topic)
//     client.on('messageReceived', (message) => {
//         console.log(`On message recieved ${topic}`)
//         console.log(`New message from topic : ${message.destinationName} with message : ${message.payloadString}`)
//         callback(message)
//     })
// }

// export const disconnectMQTT = (client) => {
//     client.disconnect()
// }

// export const sendMessage = (client, payload, topic) => {
//     const message = new Message(payload)
//     message.destinationName = topic
//     client.send(message)
// }
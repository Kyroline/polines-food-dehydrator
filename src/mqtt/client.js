// import mqtt from '@taoqf/react-native-mqtt'

// export const newClient = () => {
//     var client = mqtt.connect('mqtt://test.mosquitto.org:1883/')

//     client.on('reconnect', function () {
//         console.log("Reconnecting")
//     })

//     client.on('connect', function () {
//         console.log("Connected")
//         client.subscribe(['fd/humid', 'fd/temp', 'fd/send'], function (err) {
//             if (!err) {
//                 client.publish('presence', 'Hello mqtt')
//             }
//         })
//     })

//     client.on('message', function (topic, message) {
//         console.log(`Received Message from '${topic}' said '${message.toString}'`)
//         switch (topic) {
//             case 'fd/humid':
//                 setHumid(parseFloat(message.toString))
//                 break
//             case 'fd/temp':
//                 setTemp(parseFloat(message.toString))
//                 break
//             case 'fd/send':
//                 setImg(decodeURIComponent(message.toString))
//                 break
//             default:
//                 break    
//         }
//     })

//     return client
// }
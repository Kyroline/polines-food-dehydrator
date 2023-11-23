import MQTT from '@openrc/react-native-mqtt';

export const newClient = () => {
    // var client = MQTT.connect('mqtt://test.mosquitto.org/', {
    //     port: 1883,
    //     protocol: 'mqtt',
    //     // username: 'your username',
    //     // password: 'your password',
    //     // reconnectPeriod: 30 * 1000,
    //     qos: 0,
    //   });

    var client = MQTT.connect('ws://pakwahyu.my.id:8080/')
    
    client.on('reconnect', function () {
        console.log("Reconnecting")
    })

    client.on('connect', function () {
        console.log("Connected")
        client.subscribe(['fd/humid', 'fd/temp', 'fd/send'], function (err) {
            if (!err) {
                client.publish('presence', 'Hello mqtt')
            }
        })
    })

    return client
}
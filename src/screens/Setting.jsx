import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingHorizontal: 16,
        width: '100%',
    },
})

const Setting = () => {
    const [host, setHost] = React.useState("192.168.0.111")
    const [port, setPort] = React.useState("8080")
    const [protocol, setProtocol] = React.useState("mqtt://")
    return (
        <View style={[styles.container, { flexDirection: 'column' }]}>
            <View style={[styles.container, { flexDirection: 'row' }]}>
                <View style={{ flex: 1 }}>
                    <TextInput
                        label="Protocol"
                        value={protocol}
                        onChangeText={(text) => setProtocol(text)}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput
                        label="Host"
                        value={host}
                        onChangeText={(text) => setHost(text)}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput
                        label="Port"
                        value={port}
                        onChangeText={(text) => setPort(text)}
                    />
                </View>
            </View>
            <View style={[styles.container, { flexDirection: 'row' }]}>
                <View style={{ flex: 1 }}>
                    <TextInput
                        label="Username"
                        value={""}
                        onChangeText={() => setProtocol(protocol)}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput
                        label="Password"
                        value={""}
                        onChangeText={() => setProtocol(protocol)}
                    />
                </View>
            </View>
        </View>
    )
}

export default Setting
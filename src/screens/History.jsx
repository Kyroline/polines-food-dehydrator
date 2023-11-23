// import React, { useEffect, useState } from 'react'
// import { View } from 'react-native'
// import axios from 'axios'

// const baseUrl = 'https://api.carolynn.my.id'

const History = () => {
    // const [temp, setTemp] = useState([])
    // const [time, setTime] = useState([])
    // const [interval, setInterval] = useState(5000)
    // const [latestTime, setLatestTime] = useState(Date)


    // const onChange = (newInt) => {
    //     setInterval(newInt)
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios({
    //             method: 'get',
    //             url: `${baseUrl}/temperature${latestTime != nul ? '?latest=' + latestTime : ''}`,
    //             headers: {
    //                 Accept: 'Application/json'
    //             }
    //         })

    //         console.log(response.data)

    //         const intervalId = setInterval(fetchData, interval); // Get every 5000 ms
    //         setTemp(response.data.data.temp)
    //         setTime(response.data.data.label)
    //         // TODO : Set latest time from response.data
    //         return () => clearInterval(intervalId)
    //     }
    // }, [onChange])

    // return (
    //     <View>
    //         <Text onValueChange={(text) => onChange(text)}></Text>
    //     </View>
    // )
}

export default History
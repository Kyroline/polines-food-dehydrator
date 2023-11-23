import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Text as SvgText, G, Circle, Line } from 'react-native-svg';

const TemperatureHumidityProgressCircle = ({ currentTemperature, currentHumidity, minTemperature, maxTemperature }) => {
  // Menghitung persentase progres suhu dan kelembapan
  const temperatureProgress = ((currentTemperature - minTemperature) / (maxTemperature - minTemperature)) * 100;
  const humidityProgress = currentHumidity / 100;

  // Menghitung koordinat tengah lingkaran
  const center = 100;

  // Menentukan warna berdasarkan rentang suhu
  let temperatureColor = '#1f77b4'; // Default: biru
  if (currentTemperature >= minTemperature && currentTemperature <= maxTemperature) {
    if (temperatureProgress < 50) {
      // Warna dari biru (0%) ke hijau (50%)
      const greenValue = Math.floor((temperatureProgress / 50) * 255);
      temperatureColor = `rgb(0, ${greenValue}, 0)`;
    } else {
      // Warna dari hijau (50%) ke merah (100%)
      const redValue = Math.floor(((temperatureProgress - 50) / 50) * 255);
      temperatureColor = `rgb(${redValue}, 0, 0)`;
    }
  }

  // Koordinat titik mark suhu minimal
  const minTemperatureMarkX = center - 45 * Math.cos((45 - temperatureProgress / 2) * (Math.PI / 180));
  const minTemperatureMarkY = center - 45 * Math.sin((45 - temperatureProgress / 2) * (Math.PI / 180));

  // Menggambarkan setengah lingkaran untuk suhu
  const temperaturePathData = `M${center}, ${center} A45,45 0 ${temperatureProgress > 50 ? 1 : 0},1 ${center}, ${center}`;

  // Menggambarkan setengah lingkaran untuk kelembapan
  const humidityPathData = `M${center}, ${center} A45,45 0 ${humidityProgress > 50 ? 1 : 0},1 ${center + 1}, ${center}`;

  return (
    <View style={{ alignItems: 'center' }}>
      <Svg height="200" width="200">
        {/* Setengah lingkaran progres untuk kelembapan */}
        <Path d={humidityPathData} fill="transparent" stroke="#6495ED" strokeWidth="10" />

        {/* Setengah lingkaran progres untuk suhu */}
        <Path d={temperaturePathData} fill="transparent" stroke={temperatureColor} strokeWidth="10" />

        {/* Teks kelembapan */}
        <SvgText
          x={center}
          y={center - 30}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#000"
        >
          {`Kelembapan\n${currentHumidity}%`}
        </SvgText>

        {/* Teks suhu */}
        <SvgText
          x={center}
          y={center + 30}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#000"
        >
          {`Suhu\n${currentTemperature}°C`}
        </SvgText>

        {/* Mark titik suhu minimal */}
        {currentTemperature < minTemperature && (
          <G>
            <Circle cx={minTemperatureMarkX} cy={minTemperatureMarkY} r={5} fill="#FFD700" />
            <Line
              x1={minTemperatureMarkX}
              y1={minTemperatureMarkY}
              x2={center}
              y2={center}
              stroke="#FFD700"
              strokeWidth="2"
            />
          </G>
        )}
      </Svg>
    </View>
  );
};

export default TemperatureHumidityProgressCircle;
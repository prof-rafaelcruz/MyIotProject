import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      MQTT_HOST: process.env.MQTT_HOST,
      MQTT_PORT: process.env.MQTT_PORT,
      MQTT_PATH: process.env.MQTT_PATH,
      MQTT_USER: process.env.MQTT_USER,
      MQTT_PASS: process.env.MQTT_PASS,
    },
  };
};

import React, { useEffect, useState } from "react";
import { db } from "./data/fetchAPI";
import { ref, onValue } from "firebase/database";

function RealtimeData() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [fireStatus, setFireStatus] = useState("");

  useEffect(() => {
    const temperatureRef = ref(db, "DHT_11/Temperature");
    const humidityRef = ref(db, "DHT_11/Humidity");
    const fireStatusRef = ref(db, "FireSensor/Status");

    const unsubscribeTemperature = onValue(temperatureRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(data + "°C");
    });

    const unsubscribeHumidity = onValue(humidityRef, (snapshot) => {
      const data = snapshot.val();
      setHumidity(data + "%");
    });

    const unsubscribeFireStatus = onValue(fireStatusRef, (snapshot) => {
      const data = snapshot.val();
      setFireStatus(data);
    });

    return () => {
      unsubscribeTemperature();
      unsubscribeHumidity();
      unsubscribeFireStatus();
    };
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title text-center">Green Guardian Monitoring</h5>
      </div>
      <div className="card-body">
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Parameter</th>
              <th className="px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Temperature</td>
              <td className="border px-4 py-2">{temperature}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Humidity</td>
              <td className="border px-4 py-2">{humidity}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Fire Sensor Status</td>
              <td className="border px-4 py-2">
                {fireStatus === "Fire Detected" ? "Api Terdeteksi" : fireStatus}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RealtimeData;

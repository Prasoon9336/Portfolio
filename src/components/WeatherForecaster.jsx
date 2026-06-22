import React, { useState } from 'react';

export default function WeatherForecaster() {
  const API_KEY = '217cb95479854c308ac145316262405';
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState({ show: false, type: '', text: '' });
  const [weather, setWeather] = useState(null);

  function getWeatherIcon(condition) {
    const conditionText = (condition || '').toLowerCase();
    if (conditionText.includes('sunny') || conditionText.includes('clear')) return '☀️';
    if (conditionText.includes('cloud')) return '☁️';
    if (conditionText.includes('rain')) return '🌧️';
    if (conditionText.includes('snow')) return '❄️';
    if (conditionText.includes('thunder') || conditionText.includes('storm')) return '⛈️';
    if (conditionText.includes('mist') || conditionText.includes('fog')) return '🌫️';
    return '🌤️';
  }

  async function fetchWeather(loc) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(loc)}&aqi=yes`;
    setStatus({ show: true, type: 'processing', text: `Fetching weather for "${loc}"...` });
    setWeather(null);

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error(`Location not found or API error: ${res.status}`);
      const data = await res.json();
      setWeather(data);
      setStatus({ show: false, type: '', text: '' });
    } catch (err) {
      console.error('API Error:', err);
      setStatus({ show: true, type: 'error', text: `Error: ${err.message}. Please check the location name and try again.` });
      setWeather(null);
    }
  }

  return (
    <main>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUpStagger {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :root{--primary:#0f172a;--accent:#3b82f6;--background:transparent;--card-bg:#0f172a;--text-main:#e2e8f0}
        .wf-wrapper{padding:50px 20px;display:flex;justify-content:center;align-items:center;min-height:calc(100vh - 70px);background: transparent;}
        .utility-card{background:transparent; border-radius:12px; padding:40px; max-width:600px; width:100%;text-align:center}
        .utility-card h1{color:var(--accent);font-size:24px;font-weight:700;margin-top:0;margin-bottom:8px}
        .description{color:#94a3b8;font-size:14px;line-height:1.5;margin-bottom:30px}
        .input-group{display:flex;gap:10px;margin-bottom:20px}
        .input{flex:1;padding:12px 16px;font-size:14px;border:1px solid #334155;border-radius:6px;background:transparent;color:var(--text-main)}
        .input:focus{outline:none;border-color:var(--accent);background:transparent}
        .action-btn{background:var(--accent);color:#fff;border:none;padding:12px 24px;font-size:16px;font-weight:600;border-radius:6px;cursor:pointer}
        #logStatus{margin-top:25px;padding:12px 16px;border-radius:6px;font-size:14px;font-weight:500;line-height:1.4;text-align:left}
        .processing{background:#1e40af;color:#bfdbfe;border:1px solid #3b82f6}
        .success{background:#065f46;color:#d1fae5;border:1px solid #6ee7b7}
        .error{background:#7f1d1d;color:#fee2e2;border:1px solid #fca5a5}
        .weather-data{margin-top:30px;text-align:left;animation:fadeInScale 0.6s ease-out}
        .weather-card{background: transparent;color:white;padding:20px;border-radius:8px;margin-bottom:15px;animation:slideUp 0.6s ease-out}
        .weather-card h2{margin:0 0 15px 0;font-size:20px;animation:slideUp 0.7s ease-out}
        .weather-info{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px}
        .info-item{background: transparent;padding:12px;border-radius:6px;animation:slideUpStagger 0.6s ease-out forwards;opacity:0}
        .info-item:nth-child(1){animation-delay:0.2s}
        .info-item:nth-child(2){animation-delay:0.3s}
        .info-item:nth-child(3){animation-delay:0.4s}
        .info-item:nth-child(4){animation-delay:0.5s}
        .info-item:nth-child(5){animation-delay:0.6s}
        .info-item:nth-child(6){animation-delay:0.7s}
        .info-label{font-size:12px;opacity:0.9;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px}
        .info-value{font-size:18px;font-weight:700}
        .condition-info{display:flex;align-items:center;gap:15px;padding:15px;background: transparent;border-radius:6px;margin-bottom:15px;animation:slideUp 0.65s ease-out}
        .condition-icon{font-size:48px;animation:slideUp 0.7s ease-out}
        .condition-text .text{font-size:16px;font-weight:600}
        .condition-text .temp{font-size:24px;font-weight:700;margin-top:5px}
      `}</style>

      <div className="Weather-section wf-wrapper">
        <div className="utility-card">
          <h1>Weather Forecast</h1>
          <p className="description">Fetching weather information from public API.</p>

          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="Enter city name (e.g., London, New York, Tokyo)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={(e) => { if (e.key === 'Enter') fetchWeather(location); }}
            />
            <button className="action-btn" onClick={() => { if (location.trim()) fetchWeather(location.trim()); else setStatus({ show: true, type: 'error', text: 'Please enter a city name.' }); }}>
              Get Weather
            </button>
          </div>

          <div id="logStatus" className={status.show ? status.type : ''} style={{ display: status.show ? 'block' : 'none' }}>
            {status.text}
          </div>

          {weather && (
            <div className="weather-data">
              <div className="weather-card">
                <h2>{weather.location.name}, {weather.location.country}</h2>

                <div className="condition-info">
                  <div className="condition-icon">{getWeatherIcon(weather.current.condition.text)}</div>
                  <div className="condition-text">
                    <div className="text">{weather.current.condition.text}</div>
                    <div className="temp">{weather.current.temp_c}°C ({weather.current.temp_f}°F)</div>
                  </div>
                </div>

                <div className="weather-info">
                  <div className="info-item">
                    <div className="info-label">Feels Like</div>
                    <div className="info-value">{weather.current.feelslike_c}°C</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">Humidity</div>
                    <div className="info-value">{weather.current.humidity}%</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">Wind Speed</div>
                    <div className="info-value">{weather.current.wind_kph} km/h</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">Pressure</div>
                    <div className="info-value">{weather.current.pressure_mb} mb</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">Visibility</div>
                    <div className="info-value">{weather.current.vis_km} km</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">UV Index</div>
                    <div className="info-value">{weather.current.uv}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
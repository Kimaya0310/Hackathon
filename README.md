# 🚗 Smart AutoSense - AI-Powered Vehicle Maintenance System

<div align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-blue.svg" alt="Python">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB.svg" alt="React">
  <img src="https://img.shields.io/badge/Flask-3.0.0-green.svg" alt="Flask">
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg" alt="Tailwind CSS">
</div>

## 📋 Overview

Smart AutoSense is a full-stack MVP for an AI-powered vehicle maintenance system that demonstrates the integration of IoT sensors, AI fault prediction, and real-time monitoring. Perfect for hackathon demos or as a foundation for production vehicle maintenance solutions.

### ✨ Key Features

- **Real-time IoT Data Simulation**: Live vehicle sensor data (engine temperature, battery voltage, tire pressure, oil level) updating every 3 seconds
- **AI Fault Prediction**: Rule-based AI system that detects and predicts vehicle issues before they become critical
- **Modern Dashboard**: Beautiful, responsive UI with real-time visualizations and status indicators
- **Smart Alerts**: Critical fault detection with prominent alert banners
- **Nearby Service Centers**: Integration with local service centers for immediate assistance
- **Community Support**: Platform for vehicle owners to connect and share maintenance tips
- **Professional UI**: Clean, modern design with Tailwind CSS and smooth animations

## 🏗️ Architecture

```
Smart AutoSense/
├── backend/           # Flask API server
│   ├── app.py        # Main Flask application with IoT simulation
│   └── requirements.txt
│
├── frontend/          # React dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js       # Main dashboard view
│   │   │   ├── Header.js          # Navigation header
│   │   │   ├── FaultAlert.js      # Alert banner component
│   │   │   ├── MetricCard.js      # Sensor data cards
│   │   │   ├── TirePressure.js    # Tire visualization
│   │   │   ├── ServiceCenters.js  # Service center listings
│   │   │   ├── CommunitySupport.js # Community features
│   │   │   └── LiveIndicator.js   # Live status indicator
│   │   ├── App.js                 # Main React app
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

### Installation

#### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```

The backend will start on `http://localhost:5000`

#### 2. Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend will start on `http://localhost:3000`

## 📡 API Endpoints

### `GET /getData`
Returns current vehicle IoT sensor data.

**Response:**
```json
{
  "engine_temperature": 85.3,
  "battery_voltage": 12.5,
  "tire_pressure": [32.1, 32.0, 31.9, 32.2],
  "oil_level": 85.0,
  "timestamp": "2024-01-15T10:30:00"
}
```

### `GET /predictFault`
Returns AI-generated fault predictions based on current sensor data.

**Response:**
```json
{
  "faults": [
    {
      "type": "engine_overheating",
      "message": "Engine Overheating",
      "description": "Engine temperature is critically high at 108.5°C",
      "severity": "critical"
    }
  ],
  "severity": "critical",
  "timestamp": "2024-01-15T10:30:00"
}
```

### `GET /serviceCenters`
Returns list of nearby service centers.

### `GET /communityPosts`
Returns recent community support posts.

### `GET /health`
Health check endpoint.

## 🤖 AI Fault Detection

The system uses rule-based AI to detect the following issues:

### Critical Faults
- **Engine Overheating**: Temperature > 105°C
- **Low Battery**: Voltage < 11.5V

### Warnings
- **Engine Temperature Warning**: Temperature > 95°C
- **Battery Voltage Warning**: Voltage < 12.0V
- **Low Tire Pressure**: Any tire < 26 PSI
- **Low Oil Level**: Oil level < 30%

## 🎨 Features in Detail

### Real-Time Dashboard
- Live sensor data updates every 3 seconds
- Color-coded status indicators (green/yellow/red)
- Animated metric cards with progress bars
- Visual tire pressure representation

### Fault Alerts
- Prominent red/yellow alert banners
- Multiple fault detection
- Severity classification
- Real-time updates

### Service Center Integration
- Nearby service center listings
- Distance and ratings
- Contact information
- Quick booking interface

### Community Support
- Discussion forums
- Tips and tricks
- DIY maintenance guides
- User engagement features

## 🛠️ Technology Stack

### Backend
- **Flask**: Lightweight Python web framework
- **Flask-CORS**: Cross-origin resource sharing
- **Threading**: Background IoT data simulation

### Frontend
- **React 18**: Modern UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API calls
- **Recharts**: Data visualization library (optional)

## 🎯 Use Cases

1. **Vehicle Fleet Management**: Monitor multiple vehicles in real-time
2. **Predictive Maintenance**: Detect issues before they cause breakdowns
3. **Consumer Applications**: Personal vehicle monitoring
4. **Hackathon Projects**: Quick MVP for AI + IoT demonstrations
5. **Educational**: Learning full-stack development and IoT integration

## 🔮 Future Enhancements

- [ ] Machine Learning model for more accurate predictions
- [ ] Historical data analysis and trends
- [ ] Mobile app (React Native)
- [ ] Push notifications for critical alerts
- [ ] Integration with actual IoT sensors
- [ ] User authentication and profiles
- [ ] Maintenance scheduling
- [ ] Cost estimation for repairs
- [ ] Integration with insurance providers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👥 Author

Built with ❤️ for the Smart AutoSense project

## 🆘 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the development team.

---

<div align="center">
  <p><strong>Built for Hackathons • Ready for Production</strong></p>
  <p>🚗 Smart AutoSense - Keeping Your Vehicle Safe, One Sensor at a Time 🚗</p>
</div>


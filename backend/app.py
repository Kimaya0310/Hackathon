from flask import Flask, jsonify, request
from flask_cors import CORS
import random
import time
from datetime import datetime
import threading

app = Flask(__name__)
CORS(app)

# Vehicle data state
vehicle_data = {
    "engine_temperature": 85,
    "battery_voltage": 12.5,
    "tire_pressure": [32, 32, 32, 32],
    "oil_level": 85,
    "timestamp": datetime.now().isoformat()
}

# Service centers data with Indian names and locations
service_centers = [
    {"id": 1, "name": "Sharma Auto Care", "distance": "2.3 km", "rating": 4.8, "phone": "+91-98765-43210", "address": "MG Road, Bangalore"},
    {"id": 2, "name": "Patel Quick Service", "distance": "4.7 km", "rating": 4.6, "phone": "+91-98765-43211", "address": "Commercial Street, Bangalore"},
    {"id": 3, "name": "Kumar Premium Motors", "distance": "6.2 km", "rating": 4.9, "phone": "+91-98765-43212", "address": "Indiranagar, Bangalore"}
]

# Community support posts with Indian names
community_posts = [
    {"id": 1, "user": "Rajesh K.", "title": "Engine making weird noise", "replies": 12, "time": "2h ago"},
    {"id": 2, "user": "Priya S.", "title": "Battery replacement tips", "replies": 8, "time": "5h ago"},
    {"id": 3, "user": "Amit T.", "title": "Best oil for cold weather?", "replies": 15, "time": "1d ago"},
    {"id": 4, "user": "Sneha M.", "title": "Tire rotation schedule", "replies": 9, "time": "3h ago"},
    {"id": 5, "user": "Vikram R.", "title": "AC not cooling properly", "replies": 7, "time": "6h ago"}
]

def simulate_iot_data():
    """Simulate realistic IoT vehicle data with occasional anomalies"""
    global vehicle_data
    
    while True:
        # Simulate gradual changes with occasional spikes
        temp_change = random.uniform(-2, 2)
        vehicle_data["engine_temperature"] = max(60, min(120, vehicle_data["engine_temperature"] + temp_change))
        
        # Occasionally simulate overheating
        if random.random() < 0.05:
            vehicle_data["engine_temperature"] = random.uniform(100, 115)
        
        # Battery voltage with occasional drops
        voltage_change = random.uniform(-0.1, 0.1)
        vehicle_data["battery_voltage"] = max(10.5, min(14.5, vehicle_data["battery_voltage"] + voltage_change))
        
        if random.random() < 0.03:
            vehicle_data["battery_voltage"] = random.uniform(10.5, 11.5)
        
        # Tire pressure with occasional drops
        for i in range(4):
            pressure_change = random.uniform(-0.5, 0.5)
            vehicle_data["tire_pressure"][i] = max(25, min(40, vehicle_data["tire_pressure"][i] + pressure_change))
        
        if random.random() < 0.04:
            tire_index = random.randint(0, 3)
            vehicle_data["tire_pressure"][tire_index] = random.uniform(25, 28)
        
        # Oil level gradually decreases
        vehicle_data["oil_level"] = max(20, vehicle_data["oil_level"] - random.uniform(0, 0.2))
        
        vehicle_data["timestamp"] = datetime.now().isoformat()
        time.sleep(3)  # Update every 3 seconds

# Start IoT simulation in background thread
simulation_thread = threading.Thread(target=simulate_iot_data, daemon=True)
simulation_thread.start()

@app.route('/getData', methods=['GET'])
def get_data():
    """Get current vehicle IoT data"""
    return jsonify(vehicle_data)

@app.route('/predictFault', methods=['GET'])
def predict_fault():
    """AI-based fault prediction using rule-based logic"""
    faults = []
    severity = "none"
    
    # Engine temperature check
    if vehicle_data["engine_temperature"] > 105:
        faults.append({
            "type": "engine_overheating",
            "message": "Engine Overheating",
            "description": f"Engine temperature is critically high at {vehicle_data['engine_temperature']:.1f}°C",
            "severity": "critical"
        })
        severity = "critical"
    elif vehicle_data["engine_temperature"] > 95:
        faults.append({
            "type": "engine_warning",
            "message": "Engine Temperature Warning",
            "description": f"Engine temperature is elevated at {vehicle_data['engine_temperature']:.1f}°C",
            "severity": "warning"
        })
        if severity != "critical":
            severity = "warning"
    
    # Battery voltage check
    if vehicle_data["battery_voltage"] < 11.5:
        faults.append({
            "type": "low_battery",
            "message": "Low Battery Voltage",
            "description": f"Battery voltage is critically low at {vehicle_data['battery_voltage']:.2f}V",
            "severity": "critical"
        })
        severity = "critical"
    elif vehicle_data["battery_voltage"] < 12.0:
        faults.append({
            "type": "battery_warning",
            "message": "Battery Voltage Warning",
            "description": f"Battery voltage is low at {vehicle_data['battery_voltage']:.2f}V",
            "severity": "warning"
        })
        if severity != "critical":
            severity = "warning"
    
    # Tire pressure check
    for i, pressure in enumerate(vehicle_data["tire_pressure"]):
        if pressure < 26:
            tire_name = ["Front Left", "Front Right", "Rear Left", "Rear Right"][i]
            faults.append({
                "type": "low_tire_pressure",
                "message": f"{tire_name} Tire Pressure Low",
                "description": f"{tire_name} tire pressure is critically low at {pressure:.1f} PSI",
                "severity": "warning"
            })
            if severity != "critical":
                severity = "warning"
    
    # Oil level check
    if vehicle_data["oil_level"] < 30:
        faults.append({
            "type": "low_oil",
            "message": "Low Oil Level",
            "description": f"Oil level is critically low at {vehicle_data['oil_level']:.1f}%",
            "severity": "warning"
        })
        if severity != "critical":
            severity = "warning"
    
    return jsonify({
        "faults": faults,
        "severity": severity,
        "timestamp": datetime.now().isoformat()
    })

@app.route('/serviceCenters', methods=['GET'])
def get_service_centers():
    """Get nearby service centers"""
    return jsonify(service_centers)

@app.route('/communityPosts', methods=['GET'])
def get_community_posts():
    """Get community support posts"""
    return jsonify(community_posts)

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "timestamp": datetime.now().isoformat()})

if __name__ == '__main__':
    print("🚗 Smart AutoSense Backend Starting...")
    print("📡 IoT Data Simulation Active")
    print("🤖 AI Fault Prediction Ready")
    print("🇮🇳 Serving Indian Market")
    app.run(debug=True, port=5000, host='0.0.0.0')


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import FaultAlert from './components/FaultAlert';
import ServiceCenters from './components/ServiceCenters';
import CommunitySupport from './components/CommunitySupport';

const API_BASE_URL = 'http://localhost:5000';

function App() {
  const [vehicleData, setVehicleData] = useState(null);
  const [faults, setFaults] = useState([]);
  const [severity, setSeverity] = useState('none');
  const [serviceCenters, setServiceCenters] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // Initial data fetch
    fetchAllData();
    
    // Set up polling for real-time updates
    const interval = setInterval(() => {
      fetchVehicleData();
      fetchFaults();
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const fetchAllData = async () => {
    try {
      await Promise.all([
        fetchVehicleData(),
        fetchFaults(),
        fetchServiceCenters(),
        fetchCommunityPosts()
      ]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const fetchVehicleData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getData`);
      setVehicleData(response.data);
    } catch (error) {
      console.error('Error fetching vehicle data:', error);
    }
  };

  const fetchFaults = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/predictFault`);
      setFaults(response.data.faults);
      setSeverity(response.data.severity);
    } catch (error) {
      console.error('Error fetching faults:', error);
    }
  };

  const fetchServiceCenters = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/serviceCenters`);
      setServiceCenters(response.data);
    } catch (error) {
      console.error('Error fetching service centers:', error);
    }
  };

  const fetchCommunityPosts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/communityPosts`);
      setCommunityPosts(response.data);
    } catch (error) {
      console.error('Error fetching community posts:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading Smart AutoSense...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {severity !== 'none' && <FaultAlert faults={faults} severity={severity} />}
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && vehicleData && (
          <Dashboard vehicleData={vehicleData} faults={faults} />
        )}
        {activeTab === 'service' && (
          <ServiceCenters serviceCenters={serviceCenters} />
        )}
        {activeTab === 'community' && (
          <CommunitySupport communityPosts={communityPosts} />
        )}
      </main>
    </div>
  );
}

export default App;


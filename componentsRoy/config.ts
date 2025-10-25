// API Configuration - Automatically detects platform
import { Platform } from 'react-native';

const getApiUrl = () => {
  // IMPORTANT: Change this to your computer's IP when testing on PHYSICAL devices
  const COMPUTER_IP = '192.168.1.5';
  
  // For testing on PHYSICAL devices (real phones), set this to true
  const USE_PHYSICAL_DEVICE = false;
  
  // If using physical device, return computer's IP for all platforms
  if (USE_PHYSICAL_DEVICE) {
    return `http://${COMPUTER_IP}:3000`;
  }
  
  // For Android Emulator (virtual device on laptop)
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:3000';  // Special emulator address
  }
  
  // For iOS Simulator, Web, or default
  return 'http://localhost:3000';
};

export const API_URL = getApiUrl();
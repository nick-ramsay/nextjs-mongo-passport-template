import { useState } from 'react';
import API from '../utils/API';

export const checkAuthStatus = async () => {
  try {
    if(window.location.pathname === '/') {
      const response = await API.getCurrentUser();
      if (response.user) {
        window.location.href = '/home';
      }
    }
  } catch (error) {
    console.log('Not authenticated, redirecting to login');
    if (window.location.pathname !== '/') {
      
      window.location.href = '/';
    }
    console.log('Not authenticated');
  }
}
import { useState } from 'react';
import API from '../utils/API';

export const checkAuthStatus = async () => {
  try {
    console.log('Trying auth check');
    if(window.location.pathname === '/login') {
      const response = await API.getCurrentUser();
      if (response.user) {
        window.location.href = '/';
      }
      return response;
    }
  } catch (error) {
    console.log('Not authenticated, redirecting to login');
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
    console.log('Not authenticated');
  }
}
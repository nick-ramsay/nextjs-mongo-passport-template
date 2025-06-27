import { useState } from 'react';
import API from '../utils/API';

export const checkAuthStatus = async () => {
  try {
    //const userData = await API.getCurrentUser()
  } catch (error) {
    if (window.location.pathname !== '/') {
      window.location.href = './';
    }
    console.log('Not authenticated');
  }
}
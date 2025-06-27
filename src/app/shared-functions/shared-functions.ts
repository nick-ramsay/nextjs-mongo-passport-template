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
  } finally {
  }
}

export const getColorScheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light'; // default fallback
};
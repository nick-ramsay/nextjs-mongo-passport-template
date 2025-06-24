import { useState } from 'react';
import API from '../utils/API';

export const checkAuthStatus = async (loading, setLoading, setUser) => {
  try {
    const userData = await API.getCurrentUser()
    setUser(userData.user)
  } catch (error) {
    if (window.location.pathname !== '/login') {
      window.location.href = './login';
    }
    console.log('Not authenticated');
  } finally {
    setLoading(false)
  }
}
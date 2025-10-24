import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSave, FaArrowLeft, FaSpinner } from "react-icons/fa";

const EditProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', bio: '', profilePic: '' });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');

  const API_BASE_URL = "http://localhost:5000/api";
  const api = axios.create({ baseURL: API_BASE_URL, withCredentials: true });

  // Helper: Manual refresh token and retry
  const refreshTokenManually = async () => {
    try {
      console.log('Attempting token refresh...');
      const refreshRes = await api.post('/auth/refresh');
      console.log('Refresh successful:', refreshRes.data);
      const newToken = refreshRes.data.accessToken;
      localStorage.setItem('accessToken', newToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      if (refreshRes.data.user) {
        localStorage.setItem('user', JSON.stringify(refreshRes.data.user));
      }
      return true;
    } catch (refreshErr) {
      console.error('Refresh failed:', refreshErr);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      navigate('/login');
      return false;
    }
  };

  // Axios Interceptor: Auto refresh on 401 (with logging)
  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        console.log('Interceptor caught error:', error.response?.status);
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          console.log('Retrying with refresh...');
          const refreshed = await refreshTokenManually();
          if (refreshed) {
            return api(originalRequest);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => api.interceptors.response.eject(interceptor);
  }, [navigate]);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    let token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
      return;
    }
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('Fetching profile with token:', token.substring(0, 20) + '...');

    try {
      const res = await api.get('/auth/profile');
      console.log('Profile fetched:', res.data);
      setUser(res.data.user);
      setPreview(res.data.user.profilePic);
    } catch (err) {
      console.error('Fetch profile error:', err);
      if (err.response?.status === 401) {
        const refreshed = await refreshTokenManually();
        if (refreshed) {
          // Retry fetch
          const retryRes = await api.get('/auth/profile');
          setUser(retryRes.data.user);
          setPreview(retryRes.data.user.profilePic);
        }
      } else {
        setError('Failed to load profile. Please try logging in again.');
        if (err.response?.status === 403 || err.response?.status >= 500) {
          navigate('/login');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log('File preview set');
        setPreview(reader.result);
        setUser({ ...user, profilePicBase64: reader.result });
      };
      reader.readAsDataURL(file);
    } else if (file) {
      setError('Please select a valid image file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setError('');

    // Validate
    if (user.name.length < 2) {
      setError('Name must be at least 2 characters.');
      setUpdating(false);
      return;
    }
    if (user.bio.length > 500) {
      setError('Bio must be under 500 characters.');
      setUpdating(false);
      return;
    }

    console.log('Submitting update:', { name: user.name, bio: user.bio, hasPic: !!user.profilePicBase64 });

    try {
      const payload = {
        name: user.name,
        bio: user.bio,
      };
      if (user.profilePicBase64) {
        payload.profilePicBase64 = user.profilePicBase64;
      }

      const res = await api.put('/auth/profile', payload);
      console.log('Update successful:', res.data);

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(res.data.user));

      // Navigate back with refetch flag
      navigate('/admin', { state: { refetch: true } });
    } catch (err) {
      console.error('Update error:', err);
      if (err.response?.status === 401) {
        const refreshed = await refreshTokenManually();
        if (refreshed) {
          // Retry submit
          try {
            const retryPayload = { name: user.name, bio: user.bio };
            if (user.profilePicBase64) retryPayload.profilePicBase64 = user.profilePicBase64;
            const retryRes = await api.put('/auth/profile', retryPayload);
            localStorage.setItem('user', JSON.stringify(retryRes.data.user));
            navigate('/admin', { state: { refetch: true } });
            return;
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
          }
        }
      }
      setError(err.response?.data?.error || 'Failed to update profile. Please try again.');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <FaSpinner className="animate-spin text-4xl text-orange-500" />
      <p className="ml-4 text-gray-600">Loading profile...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/admin')} 
            className="mr-4 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo */}
          <div className="text-center">
            <img
              src={preview || user.profilePic}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-gray-200 shadow-md"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
            />
            <p className="text-xs text-gray-500 mt-1">Upload a square image (200x200 recommended)</p>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
              minLength={2}
            />
          </div>

          {/* Email (Read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
              readOnly
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              value={user.bio}
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="Tell us about yourself..."
              maxLength={500}
            />
            <p className="text-xs text-gray-500 mt-1">{user.bio.length}/500</p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={updating}
            className="w-full flex items-center justify-center py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            style={{ backgroundColor: '#F54A00' }}
          >
            {updating ? (
              <>
                <FaSpinner className="animate-spin mr-2 h-4 w-4" />
                Saving...
              </>
            ) : (
              <>
                <FaSave className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
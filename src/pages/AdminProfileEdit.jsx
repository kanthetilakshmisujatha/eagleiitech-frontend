import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const AdminProfileEdit = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', email: '', profilePic: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [file, setFile] = useState(null);

  const API_BASE_URL = "http://localhost:5000/api";

  const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const res = await api.get('/auth/me');
      setUser(res.data);
    } catch (err) {
      console.error('Failed to fetch user:', err);
      setError('Failed to load profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setError(null);
    try {
      let formData = new FormData();
      formData.append('username', user.username);
      formData.append('email', user.email);
      if (file) {
        formData.append('profilePic', file);
      }

      await api.put('/users/profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      await fetchUserProfile();
      alert('Profile updated successfully!');
      navigate('/admin');
    } catch (err) {
      console.error('Update failed:', err);
      setError('Failed to update profile. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setUser({ ...user, profilePic: e.target.result });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <button onClick={() => navigate('/admin')} className="text-gray-600 hover:text-gray-900">
            <FaArrowLeft />
          </button>
          <h2 className="text-xl font-semibold">Edit Profile</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            {user.profilePic && (
              <img src={user.profilePic} alt="Preview" className="mt-2 w-20 h-20 rounded-full object-cover" />
            )}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isUpdating}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            <FaSave />
            <span>{isUpdating ? 'Updating...' : 'Save Changes'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfileEdit;
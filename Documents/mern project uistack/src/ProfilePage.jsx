import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit2, Github, Mail, ExternalLink, LogOut } from 'lucide-react';

// This is ALREADY in the code - it's fake data for testing
const api = {
  getUserProfile: async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      id: userId,
      username: 'PalakChandak',
      email: 'palak.chandak@somaiya.edu',
      github: 'palakchandak8',
      phone: '+1 234 567 8900',
      joinDate: '2024-01-15',
      bio: 'UI/UX enthusiast | Frontend Developer'
    };
  },
  
  getUserComponents: async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 600));

    return [
      {
        id: 'comp-1',
        name: 'Gradient Button',
        type: 'button',
        createdAt: '2024-09-15',
        likes: 45,
        views: 230,
        thumbnail: '#667eea'
      },
      {
        id: 'comp-2',
        name: 'Glass Card',
        type: 'card',
        createdAt: '2024-09-20',
        likes: 78,
        views: 456,
        thumbnail: '#a855f7'
      }
    ];
  }
};

const ProfilePage = ({ userId, onBack, onLogout }) => {
  const [userData, setUserData] = useState(null);
  const [userComponents, setUserComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    loadUserData();
  }, [userId]);

  const loadUserData = async () => {
    try {
      setLoading(true);
      const [profile, components] = await Promise.all([
        api.getUserProfile(userId),
        api.getUserComponents(userId)
      ]);
      
      setUserData(profile);
      setEditedData(profile);
      setUserComponents(components);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      // await api.updateUserProfile(userId, editedData);
      setUserData(editedData);
      setEditMode(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to update profile');
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      if (onLogout) {
        onLogout();
      }
    }
  };

  if (loading) {
    return (
      <div className="contentPage">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '400px',
          gap: '20px'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '5px solid #333',
            borderTop: '5px solid #9333ea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ color: '#666', fontSize: '16px' }}>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="contentPage">
        <p style={{ color: '#666', textAlign: 'center', padding: '40px' }}>
          Failed to load profile data
        </p>
      </div>
    );
  }

  return (
    <div className="contentPage">
      <button onClick={onBack} className="backButton">
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Profile Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '32px',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          {editMode ? (
            <input
              type="text"
              value={editedData.username}
              onChange={(e) => setEditedData({...editedData, username: e.target.value})}
              className="input"
              style={{ 
                fontSize: '48px', 
                fontWeight: 'bold',
                marginBottom: '8px',
                width: '100%',
                maxWidth: '500px'
              }}
            />
          ) : (
            <h1 className="profileTitle">{userData.username}</h1>
          )}
          
          <div className="profileInfo" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={14} />
              {editMode ? (
                <input
                  type="email"
                  value={editedData.email}
                  onChange={(e) => setEditedData({...editedData, email: e.target.value})}
                  className="input"
                  style={{ fontSize: '14px', padding: '4px 8px' }}
                />
              ) : (
                <span>{userData.email}</span>
              )}
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Github size={14} />
              {editMode ? (
                <input
                  type="text"
                  value={editedData.github}
                  onChange={(e) => setEditedData({...editedData, github: e.target.value})}
                  className="input"
                  style={{ fontSize: '14px', padding: '4px 8px' }}
                />
              ) : (
                <a 
                  href={`https://github.com/${userData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#a855f7', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  {userData.github}
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

          {editMode && (
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
              <div className="formGroup">
                <label className="label">Phone</label>
                <input
                  type="tel"
                  value={editedData.phone}
                  onChange={(e) => setEditedData({...editedData, phone: e.target.value})}
                  className="input"
                />
              </div>
              <div className="formGroup">
                <label className="label">Bio</label>
                <textarea
                  value={editedData.bio}
                  onChange={(e) => setEditedData({...editedData, bio: e.target.value})}
                  className="input"
                  style={{ minHeight: '80px', resize: 'vertical' }}
                />
              </div>
            </div>
          )}

          {!editMode && userData.bio && (
            <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.6, maxWidth: '600px', marginTop: '12px' }}>
              {userData.bio}
            </p>
          )}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {editMode ? (
            <>
              <button onClick={handleSaveProfile} className="submitButton">
                Save Changes
              </button>
              <button 
                onClick={() => {
                  setEditMode(false);
                  setEditedData(userData);
                }}
                className="secondaryButton"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setEditMode(true)} className="secondaryButton">
                <Edit2 size={16} style={{ marginRight: '8px' }} />
                Edit Profile
              </button>
              <button onClick={handleLogout} className="secondaryButton" style={{ 
                backgroundColor: '#dc2626',
                color: '#fff'
              }}>
                <LogOut size={16} style={{ marginRight: '8px' }} />
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '40px'
      }}>
        <div style={{ 
          backgroundColor: '#1f1f1f',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center',
          border: '1px solid #333'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#a855f7', marginBottom: '8px' }}>
            {userComponents.length}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Components</div>
        </div>
        <div style={{ 
          backgroundColor: '#1f1f1f',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center',
          border: '1px solid #333'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#a855f7', marginBottom: '8px' }}>
            {userComponents.reduce((sum, comp) => sum + comp.likes, 0)}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Likes</div>
        </div>
        <div style={{ 
          backgroundColor: '#1f1f1f',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center',
          border: '1px solid #333'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#a855f7', marginBottom: '8px' }}>
            {userComponents.reduce((sum, comp) => sum + comp.views, 0)}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Views</div>
        </div>
      </div>

      {/* Components Section */}
      <h2 className="sectionTitle">
        Created UI {userComponents.length > 0 && `(${userComponents.length})`}
      </h2>

      {userComponents.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '64px 24px' }}>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
            No components created yet
          </p>
          <button className="submitButton">
            Create your first component
          </button>
        </div>
      ) : (
        <div className="componentGrid">
          {userComponents.map((comp) => (
            <div 
              key={comp.id} 
              style={{
                backgroundColor: '#1f1f1f',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                border: '1px solid #333'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '160px',
                background: `linear-gradient(135deg, ${comp.thumbnail} 0%, ${comp.thumbnail}dd 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase'
                }}>
                  {comp.type}
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#fff', margin: '0 0 8px 0' }}>
                  {comp.name}
                </h3>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>👁️ {comp.views}</span>
                  <span style={{ fontSize: '13px', color: '#666' }}>❤️ {comp.likes}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#555' }}>
                  {new Date(comp.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
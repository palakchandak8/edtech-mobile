import React, { useState, useCallback, useMemo } from 'react';
import { Menu, X, Search, Plus, Star, Users } from 'lucide-react';
import './App.css';
import ProfilePage from './ProfilePage';
import { components, categories, componentTypes } from './uiComponents';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pageHistory, setPageHistory] = useState(['home']);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Registration fields
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regGithub, setRegGithub] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');

  const navigateToPage = useCallback((page, category = null) => {
    setPageHistory(prev => [...prev, currentPage]);
    setCurrentPage(page);
    if (category) setSelectedCategory(category);
  }, [currentPage]);

  const goBack = useCallback(() => {
    if (pageHistory.length > 0) {
      const previousPage = pageHistory[pageHistory.length - 1];
      setPageHistory(prev => prev.slice(0, -1));
      setCurrentPage(previousPage);
    }
  }, [pageHistory]);

  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchedCategory = categories.find(cat => 
        cat.name.toLowerCase().includes(query) || 
        cat.id.toLowerCase().includes(query)
      );
      
      if (matchedCategory) {
        navigateToPage('components', matchedCategory.id);
      } else {
        navigateToPage('components', 'all');
      }
    }
  }, [searchQuery, navigateToPage]);

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    if (username && password) {
      setIsAuthenticated(true);
      setShowLoginModal(false);
      console.log('Logged in:', { username, password });
      setPassword('');
    } else {
      alert('Please fill in all fields');
    }
  }, [username, password]);

  const handleRegister = useCallback((e) => {
    e.preventDefault();
    if (regUsername && regPassword && regEmail) {
      setIsAuthenticated(true);
      setUsername(regUsername);
      setShowRegisterModal(false);
      console.log('Registered:', { regUsername, regEmail, regGithub, regPhone });
      setRegUsername('');
      setRegPassword('');
      setRegGithub('');
      setRegEmail('');
      setRegPhone('');
    } else {
      alert('Please fill in required fields (username, password, email)');
    }
  }, [regUsername, regPassword, regEmail, regGithub, regPhone]);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setCurrentPage('home');
    setPageHistory(['home']);
    console.log('Logged out successfully');
  }, []);

  const Sidebar = useMemo(() => () => (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h1 className="logo" style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
          <span className="logoPurple">UI</span>
          <span className="logoWhite">Stack</span>
        </h1>
      </div>
      
      <div className="sidebarContent">
        <div className="componentHeader">
          <Menu size={16} />
          <span>components</span>
        </div>
        
        <div className="categoryList">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => navigateToPage('components', cat.id)}
              className={`categoryButton ${selectedCategory === cat.id ? 'categoryButtonActive' : ''}`}
            >
              <span className="categoryIcon">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  ), [selectedCategory, navigateToPage]);

  const Header = useMemo(() => () => (
    <div className="header">
      <div className="headerContent">
        {isAuthenticated ? (
          <>
            <button onClick={() => setShowCreateModal(true)} className="createButton">
              <Plus size={16} />
              Create
            </button>
            <button onClick={() => navigateToPage('profile')} className="profileButton">
              ▼ Profile
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setShowLoginModal(true)}
              className="createButton"
            >
              <Plus size={16} />
              Create
            </button>
            <button onClick={() => setShowLoginModal(true)} className="loginButton">
              Login
            </button>
          </>
        )}
      </div>
    </div>
  ), [isAuthenticated, navigateToPage]);

  const HomePage = useMemo(() => () => (
    <div className="homePage">
      <h1 className="homeTitle">
        Library for<br />open-source UI
      </h1>
      
      <div className="searchContainer">
        <div className="searchWrapper">
          <Search className="searchIcon" size={20} />
          <input
            type="text"
            placeholder="Search for component, style or create one"
            className="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="searchButton" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="actionButtons">
        <button 
          className="actionButton"
          onClick={() => window.open('https://github.com/palakchandak8/UIStack', '_blank')}
        >
          <Users size={18} />
          Join the community
        </button>
        <button 
          className="actionButton"
          onClick={() => window.open('https://github.com/palakchandak8/UIStack', '_blank')}
        >
          <Star size={18} />
          Star on GitHub
        </button>
        <button 
          className="actionButton"
          onClick={() => window.open('https://docs.google.com/document/d/1PaOOEK-xt5KosGD7RA_PDSQz3hvd2ymL/edit', '_blank')}
        >
          user guide
        </button>
      </div>
    </div>
  ), [searchQuery, handleSearch]);

  const ComponentGridPage = () => {
    const categoryComponents = selectedCategory === 'all' 
      ? Object.values(components).flat()
      : components[selectedCategory] || [];

    return (
      <div className="contentPage">
        {currentPage !== 'home' && (
          <button onClick={goBack} className="backButton">
            ← Back
          </button>
        )}
        <h1 className="pageTitle">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </h1>
        <div className="componentGrid">
          {categoryComponents.map((comp) => (
            <button
              key={comp.id}
              onClick={() => {
                setSelectedComponent(comp);
                navigateToPage('component-detail');
              }}
              className="componentCard"
            >
              <div className="componentCardName">
                {comp.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const ComponentDetailPage = () => {
    const [activeTab, setActiveTab] = useState('html');
    const [bgColor, setBgColor] = useState('#1a1a1a');
    const [editableHtml, setEditableHtml] = useState(selectedComponent?.html || '');
    const [editableCss, setEditableCss] = useState(selectedComponent?.css || '');

    return (
      <div className="contentPage">
        {currentPage !== 'home' && (
          <button onClick={goBack} className="backButton">
            ← Back
          </button>
        )}
        <h1 className="pageTitle">{selectedComponent?.name || 'Component'}</h1>
        
        <div className="detailGrid">
          <div className="previewPanel">
            <div className="panelHeader">
              <div className="colorPicker">
                <label className="colorLabel">bg colour</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="colorInput"
                />
              </div>
            </div>
            <div className="preview" style={{backgroundColor: bgColor}}>
              <style>{editableCss}</style>
              <div dangerouslySetInnerHTML={{ __html: editableHtml }} />
            </div>
          </div>

          <div className="codePanel">
            <div className="panelHeader">
              <div className="tabContainer">
                <button
                  onClick={() => setActiveTab('html')}
                  className={`tab ${activeTab === 'html' ? 'tabActive' : ''}`}
                >
                  HTML
                </button>
                <button
                  onClick={() => setActiveTab('css')}
                  className={`tab ${activeTab === 'css' ? 'tabActive' : ''}`}
                >
                  CSS
                </button>
              </div>
              <button 
                className="copyButton"
                onClick={() => {
                  navigator.clipboard.writeText(activeTab === 'html' ? editableHtml : editableCss);
                  alert('Copied to clipboard!');
                }}
              >
                copy
              </button>
            </div>
            <div className="codeView">
              {activeTab === 'html' ? (
                <textarea
                  value={editableHtml}
                  onChange={(e) => setEditableHtml(e.target.value)}
                  className="codeTextarea"
                  spellCheck="false"
                />
              ) : (
                <textarea
                  value={editableCss}
                  onChange={(e) => setEditableCss(e.target.value)}
                  className="codeTextarea"
                  spellCheck="false"
                />
              )}
            </div>
          </div>
        </div>

        <div className="actionBar">
          <button className="secondaryButton">Change type</button>
          <div className="actionBarRight">
            <button className="secondaryButton">save as draft</button>
            <button className="submitButton">Submit</button>
          </div>
        </div>
      </div>
    );
  };

  // LoginModal as a separate component to prevent re-creation
  const LoginModal = () => {
    return (
      <div className="modalOverlay">
        <div className="modal">
          <button onClick={() => setShowLoginModal(false)} className="closeButton">
            <X size={24} />
          </button>
          
          <h2 className="modalTitle">LOGIN</h2>
          <p className="modalSubtitle">
            Design stunning UI elements and effortlessly share them with developers everywhere
          </p>
          
          <form onSubmit={handleLogin} className="formContainer">
            <div className="formGroup">
              <label className="label">Username</label>
              <input
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
              />
            </div>
            
            <div className="formGroup">
              <label className="label">Password</label>
              <input 
                type="password" 
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
            
            <button type="submit" className="submitButtonFull">
              Login
            </button>
            
            <p className="modalFooter">
              Don't have account?{' '}
              <button
                type="button"
                onClick={() => {
                  setShowLoginModal(false);
                  setShowRegisterModal(true);
                }}
                className="linkButton"
              >
                register
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  };

  const RegisterModal = () => {
    return (
      <div className="modalOverlay">
        <div className="modal">
          <button onClick={() => setShowRegisterModal(false)} className="closeButton">
            <X size={24} />
          </button>
          
          <p className="modalSubtitle">Happy to have you!</p>
          <h2 className="modalTitle">REGISTER</h2>
          
          <form onSubmit={handleRegister} className="formContainer">
            <div className="formGroup">
              <label className="label">Username *</label>
              <input
                type="text"
                className="input"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
                autoComplete="off"
              />
            </div>
            
            <div className="formGroup">
              <label className="label">Password *</label>
              <input 
                type="password" 
                className="input"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
            
            <div className="formGroup">
              <label className="label">GitHub profile</label>
              <input 
                type="text" 
                className="input"
                value={regGithub}
                onChange={(e) => setRegGithub(e.target.value)}
                autoComplete="off"
              />
            </div>
            
            <div className="formGroup">
              <label className="label">Gmail *</label>
              <input 
                type="email" 
                className="input"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            
            <div className="formGroup">
              <label className="label">Phone no.</label>
              <input 
                type="tel" 
                className="input"
                value={regPhone}
                onChange={(e) => setRegPhone(e.target.value)}
                autoComplete="off"
              />
            </div>
            
            <button type="submit" className="submitButtonFull">
              Register
            </button>
            
            <p className="modalFooter">
              Already have account?{' '}
              <button
                type="button"
                onClick={() => {
                  setShowRegisterModal(false);
                  setShowLoginModal(true);
                }}
                className="linkButton"
              >
                login
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  };

  const CreateModal = () => {
    const [selectedType, setSelectedType] = useState(null);

    return (
      <div className="modalOverlay">
        <div className="modalLarge">
          <button onClick={() => setShowCreateModal(false)} className="closeButton">
            <X size={28} />
          </button>
          
          <h2 className="modalTitle">What are you making?</h2>
          
          <div className="typeGrid">
            {componentTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`typeCard ${selectedType === type.id ? 'typeCardActive' : ''}`}
              >
                <div className="typeIcon">{type.icon}</div>
                <div className="typeName">{type.name}</div>
              </button>
            ))}
          </div>
          
          <div className="modalFooterRight">
            <button
              onClick={() => {
                if (selectedType) {
                  setShowCreateModal(false);
                  navigateToPage('component-detail');
                }
              }}
              disabled={!selectedType}
              className={`continueButton ${!selectedType ? 'continueButtonDisabled' : ''}`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <Sidebar />
      <Header />
      
      <div className="mainContent">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'components' && <ComponentGridPage />}
        {currentPage === 'component-detail' && <ComponentDetailPage />}
        {currentPage === 'profile' && (
          <ProfilePage 
            userId={username || 'user-123'} 
            onBack={goBack}
            onLogout={handleLogout}
          />
        )}
      </div>

      {showLoginModal && <LoginModal key="login" />}
      {showRegisterModal && <RegisterModal key="register" />}
      {showCreateModal && <CreateModal key="create" />}
    </div>
  );
};

export default App; 
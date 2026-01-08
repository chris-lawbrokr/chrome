import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('tab1')
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="app">
      <div className='app-header'>
        <img src="/logo.png" alt="Lawbrokr Logo" className="header-logo" />
        <div className="settings-container">
          <button
            className="settings-button"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <img src="/settings.png" alt="Settings" className="settings-icon" />
          </button>
          {settingsOpen && (
            <div className="settings-dropdown">
              <div className="settings-item">Profile Settings</div>
              <div className="settings-item">Preferences</div>
              <div className="settings-item">Help</div>
              <div className="settings-item">Log Out</div>
            </div>
          )}
        </div>
      </div>
      <div className='app-main'>
        {activeTab === 'tab1' && <img src="/dash-1.png" alt="Dashboard 1" className="main-icon" />}
        {activeTab === 'tab2' && <img src="/dash-2.png" alt="Dashboard 2" className="main-icon" />}
        {activeTab === 'tab3' && <img src="/dash-3.png" alt="Dashboard 3" className="main-icon" />}
      </div>
      <div className='app-dashboard'>
        <div className='dashboard-buttons'>
          <button
            className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab1')}
          >
            <img src="/dash-1.png" alt="Dashboard 1" className="button-icon" />
            <span className="button-label">Analytics</span>
          </button>
          <button
            className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            <img src="/dash-2.png" alt="Dashboard 2" className="button-icon" />
            <span className="button-label">Chat</span>
          </button>
          <button
            className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            <img src="/dash-3.png" alt="Dashboard 3" className="button-icon" />
            <span className="button-label">Chat</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

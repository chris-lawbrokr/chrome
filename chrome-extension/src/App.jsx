import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <div className="app">
      <div className='app-main'>
        {activeTab === 'tab1' && <div>1</div>}
        {activeTab === 'tab2' && <div>2</div>}
        {activeTab === 'tab3' && <div>3</div>}
      </div>
      <div className='app-dashboard'>
        <div className='dashboard-buttons'>
          <button
            className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab1')}
          >
            Tab 1
          </button>
          <button
            className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            Tab 2
          </button>
          <button
            className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            Tab 3
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

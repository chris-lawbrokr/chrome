// State to track if sidebar is open
let sidebarOpen = false;

// Create the custom sidebar element
function createSidebar() {
  // Check if extension context is valid
  if (!chrome.runtime?.id) {
    console.log('Extension context invalidated, skipping sidebar creation');
    return null;
  }

  // Check if already exists
  if (document.getElementById('lawbrokr-sidebar')) {
    return document.getElementById('lawbrokr-sidebar');
  }

  // Create sidebar container
  const sidebar = document.createElement('div');
  sidebar.id = 'lawbrokr-sidebar';
  sidebar.className = 'lawbrokr-sidebar-closed';

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.id = 'lawbrokr-close-btn';
  closeBtn.innerHTML = '×';
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSidebar();
  });

  // Create iframe to load the extension app
  const iframe = document.createElement('iframe');
  iframe.id = 'lawbrokr-iframe';
  try {
    iframe.src = chrome.runtime.getURL('index.html');
  } catch (e) {
    console.error('Failed to load extension app:', e);
    return null;
  }
  iframe.allow = 'clipboard-read; clipboard-write';

  // Append elements
  sidebar.appendChild(closeBtn);
  sidebar.appendChild(iframe);
  document.body.appendChild(sidebar);

  return sidebar;
}

// Create the floating tab element
function createFloatingTab() {
  // Check if extension context is valid
  if (!chrome.runtime?.id) {
    console.log('Extension context invalidated, skipping floating tab creation');
    return;
  }

  // Check if already exists
  if (document.getElementById('lawbrokr-floating-tab')) {
    return;
  }

  const floatingTab = document.createElement('div');
  floatingTab.id = 'lawbrokr-floating-tab';

  // Create icon
  const icon = document.createElement('img');
  try {
    icon.src = chrome.runtime.getURL('icon.png');
  } catch (e) {
    console.error('Failed to load icon:', e);
    return;
  }
  icon.alt = 'Lawbrokr';

  // Append elements
  floatingTab.appendChild(icon);

  // Add click handler to toggle sidebar
  floatingTab.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSidebar();
  });

  // Append to body
  document.body.appendChild(floatingTab);
}

// Toggle sidebar open/closed
function toggleSidebar() {
  const sidebar = document.getElementById('lawbrokr-sidebar') || createSidebar();
  if (!sidebar) return;

  sidebarOpen = !sidebarOpen;

  if (sidebarOpen) {
    sidebar.className = 'lawbrokr-sidebar-open';
  } else {
    sidebar.className = 'lawbrokr-sidebar-closed';
  }
}

// Initialize extension UI
function init() {
  if (!chrome.runtime?.id) {
    return;
  }

  createFloatingTab();
  createSidebar();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

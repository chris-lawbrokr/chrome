// Enable side panel globally when extension loads
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});

// Open side panel when extension icon is clicked
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ windowId: tab.windowId });
});

// Listen for messages from content script to open side panel
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openSidePanel' && sender.tab) {
    console.log('Received openSidePanel message from tab:', sender.tab.id);

    // Try multiple approaches to open the side panel
    Promise.resolve()
      .then(() => {
        // First, ensure side panel is enabled for this tab
        return chrome.sidePanel.setOptions({
          tabId: sender.tab.id,
          path: 'index.html',
          enabled: true
        });
      })
      .then(() => {
        // Then try to open it
        return chrome.sidePanel.open({ tabId: sender.tab.id });
      })
      .then(() => {
        console.log('Side panel opened successfully');
        sendResponse({ success: true });
      })
      .catch((error) => {
        console.error('Error opening side panel:', error);
        // Try alternative: open by window ID instead
        return chrome.sidePanel.open({ windowId: sender.tab.windowId })
          .then(() => {
            console.log('Side panel opened via windowId');
            sendResponse({ success: true });
          })
          .catch((err) => {
            console.error('Failed to open side panel:', err);
            sendResponse({ success: false, error: err.message });
          });
      });

    return true; // Required for async sendResponse
  }
});

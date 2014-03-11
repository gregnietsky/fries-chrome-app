chrome.app.runtime.onLaunched.addListener(
  function() {
    chrome.app.window.create(
      'index.html',
      {
        id: 'FriesWin',
        bounds: {
          width: 380,
          height: 640
        },
        minWidth: 380,
        minHeight: 640
      }
    );
  }
);

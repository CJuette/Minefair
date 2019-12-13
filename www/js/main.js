const defaultSettings = {
      width: 10,
      height: 10,
      numMines: 20,
      difficulty: 1, // -1 means custom
      debug: false,
      allowOutside: false,
      safeMode: false
}

function loadSettings()
{
    var storage = window.localStorage;
    var settings;
    try
    {
        settings = JSON.parse(storage.getItem('settings'));
    }catch(Err)
    {
        settings = defaultSettings;
        storeSettings(defaultSettings);
    }

    if(settings == null)
    {
        settings = defaultSettings;
        storeSettings(defaultSettings);
    }

    return settings;
}

function storeSettings(settings)
{
    window.localStorage.setItem('settings', JSON.stringify(settings));
}



ons.ready(function() {

    for (const name of SETTINGS) {
        document.getElementById(name).addEventListener('change', updateSettings);
    }

    updateMax();
    newGame();
});
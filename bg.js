browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.executeScript(tab.Id, {file: 'cs.js'});
});

chrome.commands.onCommand.addListener(command => {
  if(command === 'open-measure-it') {
    try{
      browser.tabs.query({
        active: true,
        currentWindow: true
      }).then(tab => {
        const { id } = tab[0];
        browser.tabs.executeScript(id, {file: 'cs.js'});
      })
    } catch(e){}
  }
});

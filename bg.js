localStore.get('choices')
.then((res = {}) => {
  const {choices = {}} = res;
  choices.background = choices.background || '#000000';
  choices.popup = choices.popup || '#ffff00';
  choices.popupOpacity = choices.popupOpacity || '0.3';
  choices.backgroundOpacity = choices.backgroundOpacity || '0.4';
  localStore.set({choices});
});

const execCs = tabId => {
  localStore.get('choices')
  .then((res = {}) => {
    const {choices} = res;
    chrome.tabs.executeScript(tabId, {code: `measureitChoices = '${JSON.stringify(choices)}';`});
    chrome.tabs.executeScript(tabId, {file: 'cs.js'});
  });
}

chrome.browserAction.onClicked.addListener(tab => {
  execCs(tab.Id);
});

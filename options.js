const saveData = (key, val) => {
	browser.storage.local.get()
		.then((res = {}) => {
			const { choices } = res;
			choices[key] = val;
			browser.storage.local.set({ choices })
		});
}

const setVal = (key, val, saveToo = true) => {
	switch (key) {
		case 'background': {
			if(saveToo) saveData('background', val);
			document.getElementById('backgroundLabel').textContent = val;
			if(!saveToo) document.getElementById('background').value = val;
			break;
		}
		case 'popup': {
			if(saveToo) saveData('popup', val)
			document.getElementById('popupLabel').textContent = val;
			if(!saveToo) document.getElementById('popup').value = val;
			break;
		}
		case 'popupOpacity': {
			if(saveToo) saveData('popupOpacity', val);
			document.getElementById('popupOpacityLabel').textContent = val;
			if(!saveToo) document.getElementById('popupOpacity').value = val;
			break;
		}
		case 'backgroundOpacity': {
			if(saveToo) saveData('backgroundOpacity', val);
			document.getElementById('backgroundOpacityLabel').textContent = val;
			if(!saveToo) document.getElementById('backgroundOpacity').value = val;
			break;
		}
	}
}

browser.storage.local.get()
	.then((res = {}) => {
		const { choices = {} } = res;
		setVal('background', choices.background, false);
		setVal('popup', choices.popup, false);
		setVal('popupOpacity', choices.popupOpacity, false);
		setVal('backgroundOpacity', choices.backgroundOpacity, false);
	});

document.getElementById('optionTable').addEventListener('change', e => {
	const ele = e.target;
	setVal(ele.getAttribute('id'), ele.value);
})

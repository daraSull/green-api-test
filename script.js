function getData() {
	const idInstance = document.getElementById('idInstance').value;
	const apiTokenInstance = document.getElementById('apiTokenInstance').value;
	return {idInstance, apiTokenInstance};
}
 
function setResponse (data) {
	document.getElementById('response').value = JSON.stringify(data, null, 2);
}

async function getSettings() {
	const {idInstance, apiTokenInstance} = getData();
	const url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		setResponse(data);
	} catch(error) {
        	setResponse(error);
    	}
}

async function getStateInstance() {
	const {idInstance, apiTokenInstance} = getData();
	const url = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
	try {
        	const response = await fetch(url);
		const data = await response.json();
		setResponse(data);
        } catch(error) {
        	setResponse(error);
	}
}

async function sendMessage() {
	const {idInstance, apiTokenInstance} = getData();
    	const chatId = document.getElementById('chatId').value;
    	const message = document.getElementById('message').value;
	const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
	try {
		const response = await fetch(url, {method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify({chatId, message})
        					});
		const data = await response.json();
		setResponse(data);
	} catch(error) {
        	setResponse(error);
	}
}

async function sendFileByUrl() {
	const {idInstance, apiTokenInstance} = getData();
	const chatId = document.getElementById('fileChatId').value;
    	const urlFile = document.getElementById('fileUrl').value;
	const url = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
	try {
		const response = await fetch(url, {method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify({chatId, urlFile, fileName: 'file'})
						});
		const data = await response.json();
		setResponse(data);
	} catch(error) {
		setResponse(error);
	}
}

window.onload = function () {
	document.getElementById('idInstance').value = '';
	document.getElementById('apiTokenInstance').value = '';
	document.getElementById('chatId').value = '';
	document.getElementById('message').value = '';
	document.getElementById('fileChatId').value = '';
	document.getElementById('fileUrl').value = '';
	document.getElementById('response').value = '';
};

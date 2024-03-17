


const scriptsInEvents = {

	async EventSheet1_Event5(runtime, localVars)
	{
		let now = new Date();
		
		let minutes = now.getMinutes();
		let seconds = now.getSeconds();
		let milliseconds = now.getMilliseconds();
		
		console.log(seconds)
		console.log(milliseconds)
	},

	async Battle_sheet_Event8(runtime, localVars)
	{
		console.log(RandomEnemyAmount)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


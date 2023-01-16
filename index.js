const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		const data= await fs.writeFile(fileName,fileContent)
		console.log(data);
	}catch(error){
		console.log(error);
	}
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const data= await fs.readFile(fileName,"utf-8")
		console.log(data);
	}catch(error){
		console.log(error);
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		const data= await fs.appendFile(fileName,fileContent)
		console.log(data);
	}catch(error){
		console.log(error);
	}
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const data= await fs.unlink(fileName)
		console.log(data);
	}catch(error){
		console.log(error);
	}
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
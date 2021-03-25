

export const getFileName = (fileInputEvent: any) => fileInputEvent?.target?.files[0].name
export const getFileSize = (fileInputEvent: any) => {
    const totalBytes = fileInputEvent?.target?.files[0].size;
    return totalBytes < 1000000 ? Math.floor(totalBytes / 1000) + 'KB' : Math.floor(totalBytes / 1000000) + 'MB';
}

export const readFileAsArrayBuffer = (file: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = () => {
            reject(fileReader.error);
        }
    })

}
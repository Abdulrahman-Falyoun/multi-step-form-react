

export const getFileName = (fileInputEvent: any) => fileInputEvent?.target?.files[0].name
export const getFileSize = (fileInputEvent: any) => {
    const totalBytes = fileInputEvent?.target?.files[0].size;
    return totalBytes < 1000000 ? Math.floor(totalBytes / 1000) + 'KB' : Math.floor(totalBytes / 1000000) + 'MB';
}
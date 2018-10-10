const BaseServerClient = require('bis_baseserverclient.js');

class BoxModule extends BaseServerClient {
    constructor() {
        super(); 

        this.authenticated = false;
        this.hasGUI = true;
        this.serverinfo = '';
    }

    alertEvent(name, error = false) {
        if (error)
            console.log('---- File Client Error:', name);
        else
            console.log('____ File Client:', name);
    }

    retryAuthenticationDialog() { }
    showAuthenticationDialog() { }
    hideAuthenticationDialog() { }
    showFileDialog() { }

    /** 
     * Returns the name of the server
     * @returns {String} - The name of the server, in this case 'box' 
     */
    getServerType() {
        return 'box';
    }

    getServerInfo() {
        return this.serverinfo;
    }

    // ------------------ Download file and helper routines -----------------------------------------------------------------
    /**
     * downloads a file from the server 
     * @param{String} url - the filename
     * @param{Boolean} isbinary - if true file is binary
     * @returns {Promise} -  a Promise with payload { obj.name obj.data } much like bis_genericio.read (from where it will be called indirectly)
     */
    downloadFile(url, isbinary) {
        return Promise.rejected('downloadFile not implemented ' + url + ' ' + isbinary);
    }

    /** upload file 
     * @param {String} url -- abstact file handle object
     * @param {Data} data -- the data to save, either a sting or a Uint8Array
     * @param {Boolean} isbinary -- is data binary
     * @returns {Promise} 
     */
    uploadFile(url, data, isbinary = false) {
        return Promise.rejected('uploadFile not implemented ' + url + ' ' + isbinary + ' ' + typeof data);
    }


    /** performs a file system operation
     * @param{String} operation -- the operation
     * @param{String} url -- the filename
     * @returns {Promise} payload is the result
     */
    fileSystemOperation(name, url) {
        return Promise.rejected(name + ' not implemented ' + url);
    }

    /** get file size -- the size of a file
     * @param{String} url -- the filename
     * @returns {Promise} payload is the file size
     */
    getFileSize(url) {
        return this.fileSystemOperation('getFileSize', url);
    }

    /** checks is filename is a directory
     * @param{String} url -- the filename
     * @returns {Promise} payload true or false
     */
    isDirectory(url) {
        return this.fileSystemOperation('isDirectory', url);
    }

    /** creates a directory
     * @param{String} url -- the directory name
     * @returns {Promise} payload true (created) or false (already existing)
     */
    makeDirectory(url) {
        return this.fileSystemOperation('makeDirectory', url);
    }

    /** deletes a directory
     * @param{String} url -- the directory name
     * @returns {Promise} payload true or false
     */
    deleteDirectory(url) {
        return this.fileSystemOperation('deleteDirectory', url);
    }

    /** getMatching Files
     * @param{String} querystring -- the matching string
     * @returns {Promise} payload list of filenames that match
     */
    getMatchingFiles(querystring) {
        return this.fileSystemOperation('getMatchingFiles', querystring);
    }
}

module.exports = BoxModule;


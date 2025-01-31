// code for reference for jamster.html

// for now only checks for an update and console.log() to console

// this is the file's current release tag
const currentReleaseTag = "1.0.0"

getLatestUpdate()

// yay stack overflow https://stackoverflow.com/questions/54626186/how-to-download-file-with-javascript

function downloadURI(uri, name) 
{
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

// checks to see if the file is up to date
async function getLatestUpdate() {
    try {
        const response = await fetch("https://api.github.com/repos/Zhuagle/jamsterclicker/tags")
        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }
        const data = await response.json()
        const releaseTag = (data[0].name)
        if (currentReleaseTag === releaseTag) {
            // change this to show something on screen
            console.log("matches nothing to see")
            return
        } else {
            // change this to show something on screen
            console.log("got to update")
            const downloadCheck = await fetch("https://api.github.com/repos/Zhuagle/jamsterclicker/releases/latest")
            if (!downloadCheck) {
                throw new Error("Could not fetch resource")
            }
            const downloadData = await downloadCheck.json()
            const downloadLink = downloadData.assets[0]["browser_download_url"]
            var downloadName = downloadLink.split("/")
            downloadName = downloadName[8]
            downloadURI(downloadLink, downloadName)
        }
    } catch(error) {
        console.error(error)
    }
}
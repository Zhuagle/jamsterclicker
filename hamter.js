// code for reference for jamster.html

// for now only checks for an update and console.log() to console
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

// this is the file's current release tag
const currentReleaseTag = "1.0.0"

getLatestTag()

// checks to see if the file is up to date
async function getLatestTag() {
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
        } else {
            // change this to show something on screen
            console.log("got to update")
        }
    } catch(error) {
        console.error(error)
    }
}
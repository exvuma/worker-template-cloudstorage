addEventListener('fetch', event => {
    event.respondWith(handleRequest(event))
})

const BUCKET_NAME = '' //TODO replace with your Google bucket name and endpoint of your cloud storage provider
const BUCKET_URL = `http://storage.googleapis.com/${BUCKET_NAME}`

/**
 * serve the static asset from the bucket's storage
 * @param {FetchEvent} event
 */
async function serveAsset(event, bucket_url) {
    const url = new URL(event.request.url)
    if (!response) {
        return await fetch(`${BUCKET_URL}${url.pathname}`)
    }
}
async function handleRequest(event) {
    let response = await serveAsset(event, BUCKET_URL)
    if (!response.ok) {
        // if errored then return the meaning of that status code
        response = new Response(response.statusText, { status: response.status })
    }
    return response
}

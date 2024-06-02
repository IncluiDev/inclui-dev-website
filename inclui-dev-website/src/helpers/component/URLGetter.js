export class URLGetter {
    static getIdentification() {
        return new URLSearchParams(window.location.search).get("id")
    }
}
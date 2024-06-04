export class URLGetter {
    static getIdentification() {
        return new URLSearchParams(window.location.search).get("id")
    }

    static getAtribut(atribut) {
        return new URLSearchParams(window.location.search).get(atribut)
    }
}
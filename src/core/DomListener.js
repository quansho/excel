export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error(`No $root provided in DomListener`)
        }
        this.$root = $root
    }
}
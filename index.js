const {Rectangle} = require('./rectangle');

class Render {
    constructor() {
        /**
         * Object list
         * @type {Rectangle[]}
         */
        this.objects = [];
    }
    /**
     * Adds a rectangle
     * 
     * @returns {Rectangle} the rect
     */
    addRectangle() {
        const obj = new Rectangle();
        this.objects.push(obj);
        return obj;
    }
}

module.exports = { Render }
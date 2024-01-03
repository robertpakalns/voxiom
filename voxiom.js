class Voxiom {
    constructor(t, c, a) {
        this.element = document.createElement(t)
        this.element.className = c
        a.appendChild(this.element)
    }
    text(i) { this.element.innerHTML = i; return this }
    attr(n, v) { this.element[n] = v; return this }
    style(n, v) { this.element.style[n] = v; return this }
    append(...cc) { cc.forEach(c => this.element.appendChild(c.element)) }
}
// export { Voxiom }

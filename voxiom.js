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
const Inv = {
    "F6J": "Combat Assault Rifle",
    "FyR": "Tactical Assault Rifle",
    "IABXQl": "Surge Assault Rifle",
    "FDt": "Elite Assault Rifle",
    "E+J": "Burst Shotgun",
    "GXV": "Light Submachine Gun",
    "H9F": "Compact Submachine Gun",
    "Epx": "Light Sniper Rifle",
    "FuN": "Heavy Sniper Rifle",
    "Ehd": "Strike Pistol",
    "F6R": "Magnum Pistol",
    "C2d": "Shovel"
}

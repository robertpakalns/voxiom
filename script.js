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
    do(c, i) { setInterval(c.bind(this), i); return this }
}


new Voxiom("div", "voxiomConsole voxiomCreate", document.body)
    .do(function () {
        const t = document.querySelector('body > div[style*="background-color: rgba(0, 0, 0, 0.8); display: block"]')
        if (t && t.innerHTML != "") {
            const c = t.innerHTML
            const pbp = c.match(/Player Block Position:<br>\s*x: ([^<]+) y: ([^<]+) z: ([^<]+)/)
            this.text(`${parseInt(c.match(/FPS: ([\d]+)/)[1])} FPS<br>${pbp[1]} ${pbp[2]} ${pbp[3]}<br>${(c.match(/Latency: ([\d]+ms)/)[1])}`)
        }
        else this.text("")
    }, 50)

setInterval(() => {
	document.querySelectorAll("[id^='voxiom-io']").forEach(e => e.remove())
}, 100)




const el = document.createElement("style")
el.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Roboto'); * { font-family: "Roboto" }`
document.head.appendChild(el)



//Chat links
const msgClass = "nMXpg"
setInterval(() => {
    document.querySelectorAll(`.${msgClass}> span:nth-child(5)`).forEach(msg => {
        if (!msg.querySelector('a') && msg.textContent.match(/https?:\/\/[^\s]+/))
            msg.innerHTML = msg.textContent.replace(/(https?:\/\/[^\s]+)/g, url => '<a style="color: orange !important" target="_blank" href="' + url + '">' + url + '</a>')
    })
}, 10)

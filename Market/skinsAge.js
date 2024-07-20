const output = (v, e) => `${v} ${v != 1 ? e + "s" : e}`
const creationTime = t => {
        let ms = Date.now() - t
        return Object.entries({ year: 31536000000, day: 86400000, hour: 3600000, minute: 60000, second: 1000 }).map(([unit, value]) => {
            const uv = Math.floor(ms / value)
            ms %= value
            return uv > 0 ? output(uv, unit) : null
        }).filter(Boolean).join(" ") + " ago"

}
fetch("https://voxiom.io/profile/myinv", {
      "credentials": "include",
      "method": "POST"
})
.then(r => r.json())
.then(data => {
    data.data
        .sort((a, b) => b.creation_time - a.creation_time)
        .map(el => console.log(`ID ${el.item_id} - ${creationTime(el.creation_time)}`))
})

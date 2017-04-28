const path = require('path')
const glob = require('glob')


function dirs(dirname) {
    let res = glob.sync('*/', {cwd: dirname})

    let map = res.map(name => {
        return {
            name: path.basename(name),
            url: path.join(dirname, name)
        }
    })

    return map
}


class Apps {
    constructor(dirname) {
        dirs(dirname).forEach(item => {
            this[item.name] = item.url
        })
    }
}

module.exports = Apps

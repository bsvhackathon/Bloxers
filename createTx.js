const { PrivateKey } = require('@bsv/sdk')
const { readFile, writeFile, chmod } = require('fs/promises')
const crypto = require('crypto')
global.self = { crypto }

async function createKey() {
    try {
        const WIF = await readFile('.wif')
        const key = PrivateKey.fromWif(WIF.toString())
        console.error('You already have a key file, delete .wif manually if you know what you\'re doing.')
        console.log({ address: key.toAddress() })
    } catch (error) {
        const key = PrivateKey.fromRandom()
        const WIF = key.toWif()
        await writeFile('.wif', WIF)
        await chmod('.wif', 0o400)
        console.log({ address: key.toAddress() })
    }
}

createKey()
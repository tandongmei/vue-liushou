const HOST = {
    development: '/proxy',
    auth: 'tan.dongmei'
}

const ENV = process.env.NODE_ENV

export default {
    envHost: HOST[ENV],
    apiUri: {
        'user': {
            'base': HOST[ENV] + '/api/user'
        }
    }
}
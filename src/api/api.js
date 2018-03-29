const HOST = {
    development: '/proxy',
    auth: 'tan.dongmei'
}

const ENV = process.env.NODE_ENV

export default {
    envHost: HOST[ENV],
    apiUri: {
        'user': {
            'base': HOST[ENV] + '/api/user',
            'login': HOST[ENV] + '/api/user/login'
        },
        'event': {
            'base': HOST[ENV] + '/api/event',
            'host': HOST[ENV] + '/api/event/host'         
        },
        'comment': {
            'base': HOST[ENV] + '/api/comment'
        },
        'file': {
            'base': HOST[ENV] + '/api/file'
        },
        'news': {
            'base': HOST[ENV] + '/api/news'
        },
        'host': {
            'base': HOST[ENV] + '/api/host'
        }
    }
}
function fn() {
    karate.configure('connectTimeout', 5000);
    karate.configure('readTimeout', 5000);
    karate.configure('ssl', true);

    var urlBase = karate.properties['urlBaseGlobal'] || 'https://#{base}#'
    var namespace = karate.properties['namespaceGlobal'] || 'api/#{service}#'

    return {
        api: {
            localUrlBase: urlBase + '/'+ namespace //'https://reqres.in/api/users'
        },
        path: {
            listUser: '/?page=2',
            userNotFound: '/23',
            updateUser: '/2'
        }
    };
}
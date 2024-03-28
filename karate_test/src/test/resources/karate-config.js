function fn() {
    karate.configure('connectTimeout', 5000);
    karate.configure('readTimeout', 5000);
    karate.configure('ssl', true);

    var urlBase = karate.properties['baseUrl'] || 'https://#{base}#' || 'https://reqres.in/'
    var namespace = karate.properties['namespace'] || 'api/#{service}#' || '/api/users'

    return {
        api: {
            localUrlBase: 'https://reqres.in//api/users'//urlBase + '/'+namespace
        },
        path: {
            listUser: '/?page=2',
        }
    };
}
function fn() {
    karate.configure('connectTimeout', 5000);
    karate.configure('readTimeout', 5000);
    karate.configure('ssl', true);

    var baseUrl = karate.properties['baseUrl'] || 'https://reqres.in'
    var service = karate.properties['service'] || '/api'

    return {
        api:{
             urlBase: baseUrl + '/'+service
        },
        path:{
            userList: '/users?page=2',
        }
    };
}
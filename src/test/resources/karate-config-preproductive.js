function fn() {
    karate.configure('connectTimeout', 5000);
    karate.configure('readTimeout', 5000);
    karate.configure('ssl', true);

    var baseUrl = karate.properties['baseUrl'] || 'https://#{business-service}#-ext-#{env}#.apps.#{domain-name}#.com'
    var namespace = karate.properties['namespace'] || '#{project-name}#/api/v1/#{service}#'

    return {
        api: {
            urlBase: baseUrl + '/'+namespace
        },
        path: {
            RegistrationPetition: '/registration-petition',
            ManualRegistration: '/manual-registration'
        }
    };
}
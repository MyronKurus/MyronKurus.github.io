function createSecretHolder(secret) {
    var sec = secret;
    return {
        setSecret: function(s) {
            sec = s;
        },
        getSecret: function() {
            return sec;
        }
    };
}
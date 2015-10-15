var config = {
    channels: ['#dev'],
    server: 'irc.magazines.com',
    user: '_mkluting'
};

var irc = require('irc');

var bot = new irc.Client(config.server, config.user, {
    channels: config.channels
});



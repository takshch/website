var Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyBaURuogRvGQGnd'
});
var base = Airtable.base('appzsh03Jc2PAFTsE');

base('users').find('recnckXNYtqvFIgNQ', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});

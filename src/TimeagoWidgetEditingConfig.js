import * as Scrivito from 'scrivito';


Scrivito.provideEditingConfig('TimeagoWidget', {
    title: 'Countdown',
    attributes: {
        prefix: {
            title: 'Prefix',
        },
        date: {
            title: 'Date',

        },
    },
    properties: [
        'prefix',
        'date',
    ],

});
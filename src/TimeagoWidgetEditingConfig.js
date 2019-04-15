import * as Scrivito from 'scrivito';


Scrivito.provideEditingConfig('TimeagoWidget', {
    title: 'Timeago',
    attributes: {
        prefix: {
            title: 'Prefix',
            description: 'Text shown before the date.'
        },
        date: {
            title: 'Date',
            description: 'A Date in the past.'
        },

    },
    properties: [
        'prefix',
        'date',

    ],

});
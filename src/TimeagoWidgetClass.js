import * as Scrivito from 'scrivito';

const TimeagoWidget = Scrivito.provideWidgetClass('TimeagoWidget', {
    attributes: {
        prefix: 'string',
        date: 'date',
        postfix: 'string'
    },
});

export default TimeagoWidget;
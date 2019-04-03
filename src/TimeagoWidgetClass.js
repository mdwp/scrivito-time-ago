import * as Scrivito from 'scrivito';

const TimeagoWidget = Scrivito.provideWidgetClass('TimeagoWidget', {
    attributes: {
        prefix: 'string',
        date: 'date',
    },
});

export default TimeagoWidget;
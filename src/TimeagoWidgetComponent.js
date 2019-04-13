import * as React from 'react';
import * as Scrivito from 'scrivito';
import TimeAgo from 'react-timeago';

Scrivito.provideComponent('TimeagoWidget', ({ widget }) => {
  const date = widget.get('date');

  if (!date.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide a date in the widget properties.
        </h4>
    );
  }

  return (
    <h3>{widget.get('prefix')}
    <TimeAgo  date={date} />
    </h3>
  );
});


import * as React from 'react';
import * as Scrivito from 'scrivito';
import TimeAgo from 'react-timeago';

Scrivito.provideComponent('TimeagoWidget', ({ widget }) => {
  const date = widget.get('date');

    /*if (!dateInFuture.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Create Accordion Items in widget properties.
      </InPlaceEditingPlaceholder>
    );
  }*/

  return (
    <h3>{widget.get('prefix')}
    <TimeAgo  date={date} />
    </h3>
  );
});


import * as React from 'react';
import * as Scrivito from 'scrivito';
import TimeAgo from 'react-timeago';

Scrivito.provideComponent('TimeagoWidget', ({ widget }) => {
  const date = widget.get('date');

  if (!date && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide a date in the widget properties.
        </h4>
    );
  }

  return (
    <div>
    <span className="prefix">{widget.get('prefix')}</span>
    <span className="time"><TimeAgo  date={date} /></span>
    <span className="postfix">{widget.get('postfix')}</span>
    </div>

  );
});


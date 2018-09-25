import React from "react";

const Events = ({ events }) => {
  return (
    <div>
      <ul>
        {events.map(event => {
          return (
            <li key={event.id}>
            <img src={event.images[0].url} width="100"/>
              {event.name} <a href={event.url}>Link</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Events;

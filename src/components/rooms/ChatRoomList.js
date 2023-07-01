import React from 'react';
import { Link } from 'react-router-dom';
import { Loader, Nav } from 'rsuite';
import NavItem from 'rsuite/lib/Nav/NavItem';
import RoomItem from './RoomItem';
import { useRooms } from '../../context/roomscontext';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const ChatRoomList = ({ aboveElHeight }) => {
  const rooms = useRooms();
  const location = useLocation();
  return (
    <Nav
      appearence="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100%-${aboveElHeight}px)`,
      }}
      activeKey={location.pathname}
    >
      {!rooms && (
        <Loader center vertical content="Loading" speed="slow" size="md" />
      )}

      {rooms &&
        rooms.length > 0 &&
        rooms.map(room => (
          <NavItem
            componentClass={Link}
            to={`/chats/${room.id}`}
            key={room.id}
            eventKey={`/chats/${room.id}`}
          >
            <RoomItem room={room} />
          </NavItem>
        ))}
    </Nav>
  );
};

export default ChatRoomList;

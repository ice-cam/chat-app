import React from 'react';
import { Nav } from 'rsuite';
import NavItem from 'rsuite/lib/Nav/NavItem';
import RoomItem from './RoomItem';

const ChatRoomList = ({ aboveElHeight }) => {
  return (
    <Nav
      appearence="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100%-${aboveElHeight}px)`,
      }}
    >
      <NavItem>
        <RoomItem />
      </NavItem>
    </Nav>
  );
};

export default ChatRoomList;

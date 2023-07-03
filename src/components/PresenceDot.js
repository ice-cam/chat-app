import React from 'react';
import { usePresence } from '../misc/custom-hooks';
import { Badge, Tooltip, Whisper } from 'rsuite';

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);
  const getColor = presence => {
    if (!presence) {
      return 'gray';
    }

    switch (presence.state) {
      case 'online':
        return 'green';
      case 'offline':
        return 'red';
      default:
        return 'gray';
    }
  };

  const getText = presence => {
    if (!presence) {
      return 'Unknown state ';
    }

    return presence.state === 'online'
      ? 'Online'
      : `Last online ${new Date(presence.last_changed).toLocaleDataString()}`;
  };
  return (
    <Whisper
      placement="top"
      controlId="control-id-hover"
      trigger="hover"
      speaker={<Tooltip>{getText(presence)}</Tooltip>}
    >
      <Badge
        className="cursor-pointer"
        style={{ backgroundcolor: getColor(presence) }}
      />
    </Whisper>
  );
};

export default PresenceDot;

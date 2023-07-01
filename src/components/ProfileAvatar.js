import React from 'react';
import { Avatar } from 'rsuite';

const ProfileAvatar = ({ name, ...avatarProps }) => {
  return (
    <Avatar circle {...avatarProps}>
      getNameInitials(name);
    </Avatar>
  );
};

export default ProfileAvatar;

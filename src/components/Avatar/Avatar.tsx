import React from 'react';
import './Avatar.scss';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 89 }) => {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
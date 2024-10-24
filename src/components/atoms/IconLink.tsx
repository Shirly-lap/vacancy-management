import React from 'react'
import Link from 'next/link';
import { IconType } from 'react-icons';


interface IconLink {
  path: string;
  text: string;
  Icon: IconType;
  color?: string;
}
export const IconLink = ({ path, text, Icon, color = '#000' }: IconLink) => {
  // const IconComponent = icons[iconType];

  return (
    <Link href={path} className="link-icon">
      <Icon size="20" color={color}/>
      {text}
    </Link>
  )
}

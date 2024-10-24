import { IconLink } from '@/components/atoms/IconLink'
import { icons } from '@/model/Icon'
import React from 'react'

export default function page() {
  return (
    <div>
      <IconLink path='/h' text='holaa' Icon={icons.search}  />
    </div>
  )
}

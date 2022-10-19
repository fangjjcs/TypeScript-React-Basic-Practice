import React from 'react'

const MusicItem: React.FC<{ name: string}> = (props) => {
  return (
    <div>{props.name}</div>
  )
}

export default MusicItem;

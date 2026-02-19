import React from 'react'

export const BasicTypes = () => {

  const name: string = 'Álvaro';
  const age: number = 32;
  const isActive: boolean = true;

  const skills: string[] = ['react', 'node', 'mySql', 'reactNative'];

  skills.push('')

  return (
    <>
      <h3>Tipos básicos</h3>

      <p>{name} {age} {isActive ? 'TRUE' : 'FALSE'}</p>
      <p>{skills.join(', ')}</p>
    </>
  )
}

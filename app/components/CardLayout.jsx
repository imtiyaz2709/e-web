import React from 'react'
import Card from './Card'

const CardLayout = () => {
  return (
    <div className='flex w-full gap-3 mt-2'>
        <Card title="Our Aim" bg="#ffa502"/>
        <Card title="Our Courses" bg="#2ed573"/>
        <Card title="Online Study" bg="#3742fa"/>
        <Card title="Our Response" bg="#ff6b81"/>
    </div>
  )
}

export default CardLayout
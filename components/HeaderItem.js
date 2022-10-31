import React from 'react'
import tw from 'tailwind-styled-components'

const HeaderItem = ({ Icon, title}) => {
  return (
   <Wrapper> 
       <Icon className='h-8 mb-1 group-hover:animate-bounce' />
        <Title>{title}</Title>
   </Wrapper>
  )
}
const Wrapper = tw.div`flex flex-col items-center group cursor-pointer w-12 sm:w-20`
const Title = tw.p`opacity-0 group-hover:opacity-100 tracking-widest`
export default HeaderItem
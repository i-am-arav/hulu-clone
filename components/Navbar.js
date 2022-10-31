import React from 'react'
import tw from 'tailwind-styled-components';
import requests from '../utils/requests'
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
  return (
    <Wrapper>
        <ItemWrapper>
            {Object.entries(requests).map(([key, {title}]) => <Item onClick={() => router.push(`/?genre=${key}`)} key={key}>{title}</Item>)}
        </ItemWrapper>
    </Wrapper>
  )
}

const Wrapper = tw.nav`relative`
const ItemWrapper = tw.div`flex h-fit px-10 sm:px-16 text-xl whitespace-nowrap space-x-10 sm:space-x-16 overflow-x-scroll scrollbar-hide`
const Item = tw.h2`cursor-pointer transition duration-100 hover:scale-125 hover:text-white last:pr-24`

export default Navbar
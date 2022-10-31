import React from 'react'
import tw from 'tailwind-styled-components'
import HeaderItem from './HeaderItem'
import Image from 'next/image'
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

const Header = () => {
  return (
    <Wrapper>
        <NavContainer>
            <HeaderItem title={'Home'} Icon={HomeIcon} />
            <HeaderItem title={'Trending'} Icon={LightningBoltIcon} />
            <HeaderItem title={'Verified'} Icon={BadgeCheckIcon} />
            <HeaderItem title={'Collections'} Icon={CollectionIcon} />
            <HeaderItem title={'Search'} Icon={SearchIcon} />
            <HeaderItem title={'Account'} Icon={UserIcon} />
            <HeaderItem title={'Home'} Icon={HomeIcon} />
        </NavContainer>
        <Image src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" width={160} height={80} />

    </Wrapper>
  )
}

const Wrapper = tw.div`flex flex-col sm:flex-row m-5 justify-between items-center h-auto`

const NavContainer = tw.div`flex flex-grow justify-evenly items-center max-w-2xl`

export default Header
import Image from 'next/image'
import React from 'react'
import tw from 'tailwind-styled-components'
import { ThumbUpIcon } from '@heroicons/react/outline'

const Movie = ({movie}) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original' 
    const {overview, title,backdrop_path: backdropPath, poster_path:posterPath, original_name:originalName,release_date:releaseDate, first_air_date:firstAirDate, vote_count:voteCount } = movie;
   return (
      <Wrapper>
          <Image 
            layout="responsive"
            height={1080}
            width={1920}
            src={`${baseUrl}${posterPath || backdropPath}`}  
        />
        <div className='p-2'>
            <Overview>{overview}</Overview>
            <Title>{title || originalName}</Title>
            <ReleaseDate>
                {releaseDate || firstAirDate}
                <ThumbUpIcon className='h-5 mx-2'/>
                {voteCount}
            </ReleaseDate>
        </div>
      </Wrapper>
  )
}
const Wrapper = tw.div`group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50`
const Overview = tw.p`truncate max-w-md`
const Title = tw.h2`mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold`
const ReleaseDate = tw.p`flex items-center opacity-0 group-hover:opacity-100`
export default Movie
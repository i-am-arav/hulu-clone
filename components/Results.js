import React from 'react'
import tw from 'tailwind-styled-components'
import Movie from './Movie'

const Results = ({ movies }) => {
  return (
   <Wrapper>
       {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
   </Wrapper>
  )
}
const Wrapper = tw.div`px-5 my-10 sm:grid sm:gird-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center` 
export default Results
import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import axios from 'axios'
import requests from '../utils/requests'
import Results from '../components/Results'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Navbar />
      <Results movies={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || 'fetchTrending';
  try {

      const response = await axios.get(`https://api.themoviedb.org/3/${requests[genre].url}`);
      return {
        props : {
          results : response.data.results
        }
      }
    
  }
  catch(e) {
    return {
      props : {
        results : []
      }
    }
  }
}



import React from 'react'
import './RowList.css'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <>
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trading Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}

export default RowList

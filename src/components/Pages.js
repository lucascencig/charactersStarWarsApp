import React, { useState } from 'react'
import axios from 'axios'


// styles
import '../styles/bootstrap.min.css'
import '../styles/Pages.css'

const Pages = () => {

  const [nextPag, setNextPag] = useState([])

  const page1 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=1').then(res => {
      const next = res.data
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }

  const page2 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=2').then(res => {
      const next = res.data
      // console.log(next.results)
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }

  const page3 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=3').then(res => {
      const next = res.data
      // console.log(next.results)
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }

  const page4 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=4').then(res => {
      const next = res.data
      // console.log(next.results)
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }

  const page5 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=5').then(res => {
      const next = res.data
      // console.log(next.results)
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }

  const page6 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=6').then(res => {
      const next = res.data
      // console.log(next.results)
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }

  const page7 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=7').then(res => {
      const next = res.data
      // console.log(next.results)
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }
  const page8 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=8').then(res => {
      const next = res.data
      // console.log(next.results)
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }

  const page9 = (e) => {
    e.preventDefault()
    axios.get('https://swapi.dev/api/people/?page=9').then(res => {
      const next = res.data
      // console.log(next.results)
      console.log(next.results[0].name)
      setNextPag(next.results)
    })
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#" onClick={page1}>1</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={page2}>2</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={page3}>3</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={page4}>4</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={page5}>5</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={page6}>6</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={page7}>7</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={page8}>8</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={page9}>9</a></li>
        </ul>
      </nav>


      {/* RENDERIZADO DE PAGINAS */}

      <div className='text-center results_pages'>
        {nextPag.map((char, ix) => {
          return (
            <ul key={ix}>
              <li className='bg-primary results_items text-white'>{char.name}</li>

            </ul>

          )
        })}
      </div>

    </div>
  )
}

export default Pages
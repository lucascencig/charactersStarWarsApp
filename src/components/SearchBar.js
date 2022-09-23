import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

//actions
import { getCharacterByName, getCharacters } from '../redux/actions'

//styles
import '../styles/bootstrap.min.css'
import '../styles/searchbar.css'
import swal from 'sweetalert'
import axios from 'axios';

const SearchBar = () => {





  return (
    <div>
      <form className='container searchForm' >
        <input className='m-3 my-3 text-center searchbar' type="text" placeholder="Search your favourite character..." />
        <button className='btn btn-success m-3 buttonSearch'>Search</button>
      </form>
      <hr />
    </div>
  )
}

export default SearchBar
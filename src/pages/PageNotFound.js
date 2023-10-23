import React from 'react'
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {

    let location = useLocation();

  return (
    <h2>404 | Page {location.pathname} not found</h2>
  )
}

export default PageNotFound
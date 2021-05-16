import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
{
    site{
  
    siteMetadata{
      title
      description
      author
      data
      person {
        name
        age
      }
    }
      
    }
  }

`

export default function Header() {
    const { site: { siteMetadata: { title, person: { name } } } } = useStaticQuery(getData)

    return (
        <div>
            <h3>title: {title}</h3>
            <h3>name: {name}</h3>
        </div>
    )
}

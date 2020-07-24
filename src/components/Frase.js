import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContenedorFrase = styled.div`
    padding:3rem;
    background-color: #fff;
    border-radius:.5rem;
    max-width:800px;

    h1{
        font-family:Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
        text-align:center;
        position:relative;
        padding:3rem 4rem;

        &::before{
            content:open-quote;
            font-size:10rem;
            color:black;
            position:absolute;
            left:-1rem;
            top:-2rem;
        }
    }

    p{
        font-weight:bold;
        font-size:1rem;
        text-align:right;
        color:#666;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
`

const Frase = ({frase}) => {

    // if(Object.keys(frase).length === 0) return null

    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContenedorFrase>
    )
}

Frase.propTypes = {
    frase: PropTypes.object.isRequired
}

export default Frase

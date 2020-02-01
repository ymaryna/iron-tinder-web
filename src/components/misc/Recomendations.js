import React, { useState } from 'react'
import GetFromTinderService from '../../hooks/GetFromTinderService'
import TinderService from '../../services/TinderService'
import Loading from './Loading'

const Recomendations = () =>{
    
    const { data,loading } = GetFromTinderService(TinderService.recommendations)

    if(loading) {
        return(
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <div>
            {data.map(user => (
                JSON.stringify(user)
            ))}
        </div>
    )
}


export default Recomendations
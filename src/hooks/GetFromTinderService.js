import React, { useState, useEffect } from 'react'
import testUser from '../data/seeds.json'

const  GetFromTinderService = (service) => {

    const [ data, setData ] = useState({data:[],loading:true})

    useEffect(() => {
        // service().then(newData=> setData({data:newData, loading:false}))
        setTimeout(() => {
            setData({data:testUser, loading:false})
        }, 5000)
    }, [service])
    
    return data
}

export default GetFromTinderService
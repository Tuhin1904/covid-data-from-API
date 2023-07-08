import {useEffect, useState} from 'react'
import './statewise.css'

const Statewise=()=>{

    const [data, setData]= useState([])

    const getCovidData=async()=>{
        const res= await fetch('https://data.covid19india.org/data.json')
        // const res= await fetch('https://api.covid19india.org/data.json')
        const actualres= await res.json();
        // console.log("API response is",actualres.WB.districts)
        console.log("API response is", actualres)
        console.log("API response statewise is", actualres.statewise)
        console.log("API response statewise is by index", actualres.statewise[0])
        // console.log("API response District-wise is",actualres.WB.districts)
        // console.log("API response District-wise in array format is",[actualres.WB.districts])
        // console.log("API response for 2nd vaccination is",actualres.WB.districts.Alipurduar.total.vaccinated2)
        setData(actualres.statewise)
    }    
    useEffect(()=>{
        getCovidData();
    },[])
    
    return (
        <>
            
            <div className='container-fluid mt-5'>
                <div className='main-heading'>
                    <h1 className='mb-5 text-center'><span className='fw-bold'>India</span> COVID 19 updates</h1>
                </div>

                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='thead-dark tHead'>  
                            <tr>
                                <th>State</th> 
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                         <tbody className='tableBody'>
                            {
                                data.map((currE, ind)=>{
                                    return(
                                        <tr key={ind}>
                                            <td>{currE.state}</td>
                                            <td>{currE.confirmed}</td>
                                            <td>{currE.recovered}</td>
                                            <td>{currE.deaths}</td>
                                            <td>{currE.active}</td>
                                            <td>{currE.lastupdatedtime}</td>
                                        </tr>
                                    )
                            })     
                            }

                        </tbody> 

                    </table>

                </div>
            </div>
        </>
    );
}
export default Statewise; 
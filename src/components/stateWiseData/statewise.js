import {useEffect} from 'react'

const Statewise=()=>{

    const getCovidData=async()=>{
        const res= await fetch('https://data.covid19india.org/v4/min/data.min.json')
        const actualres= await res.json();
        console.log(actualres.Statewise)

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
                        <thead className='thead-dark'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                        </tr>
                        <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}
export default Statewise; 
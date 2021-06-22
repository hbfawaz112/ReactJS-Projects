import React,{useState, useEffect} from 'react'
import axios from 'axios'
function GlobalStats() {

    const url='https://coronavirus-19-api.herokuapp.com/all'
    const [globalstat, setGlobalstat] = useState('')

    const fetchdata = () =>{
            axios.get(url).then(Response => setGlobalstat(Response.data)).catch(
                err => console.log(err)
            )
    }

    useEffect (() =>{
        fetchdata()
    }, []);


    return (
        <div>
            <h1 className="text-light">
            GLOBAL STATISTICS ON COVID-19</h1>
            <br></br>
            <div className="row">
                <div className="col">

                    <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Cases</h2>
                        <p class="card-text">
                            <h3 className="text-danger">
                                {globalstat.cases}
                            </h3>
                            <span className="display-3">
                            😷 
                            </span>
                        </p>
                        
                    </div>
                    </div>
                 </div>

                <div className="col">
                   <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Recoverd</h3>
                        <p class="card-text">
                            <h3 className="text-success">
                                {globalstat.recovered}
                            </h3>
                            <span className="display-3">
                            🙂
                            </span>
                        </p>
                        
                    </div>
                    </div>
                </div>
                
                <div className="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Death</h3>
                        <p class="card-text">
                            <h3 className="text-muted">
                                {globalstat.deaths}
                            </h3>
                            <span className="display-3">
                            💀
                            </span>
                        </p>
                        
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default GlobalStats

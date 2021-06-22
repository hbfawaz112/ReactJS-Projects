import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Country(props) {
    const { country } = props.match.params;
 
    const url=`https://coronavirus-19-api.herokuapp.com/countries/${country}`

    const [Country, setCountry] = useState('');

    const fetchData = () => {

        axios.get(url).then(
            Response => setCountry(Response.data)
        ).catch(
            err => console.log(err)
        )

    }

    useEffect( () =>{
        fetchData()
    } , [])


    return (
        <div>
           
           <h1 className="mt-5  text-light">
               {country}
           </h1>

           <h2 className="text-light text-left ml-5">Total Cases : </h2>
           <br></br>
           <div className="row">
                <div className="col">

                    <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Cases</h2>
                        <p class="card-text">
                            <h3 className="text-danger">
                                {Country.cases}
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
                                {Country.recovered}
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
                                {Country.deaths}
                            </h3>
                            <span className="display-3">
                            💀
                            </span>
                        </p>
                        
                    </div>
                    </div>
                </div>
                
            </div>
            <br></br><br></br>
            <h2 className="text-light ml-5 mb-5 text-left">
                Today Cases : 
            </h2>

            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">New Cases</h3>
                        <p class="card-text">
                            <h3 className="text-muted">
                                {Country.todayCases}
                            </h3>
                            <span className="display-3">
                            😷
                            </span>
                        </p>
                        
                    </div>
                    </div></div>
                    <div className="col">
                    <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">New Deaths</h3>
                        <p class="card-text">
                            <h3 className="text-muted">
                                {Country.todayDeaths}
                            </h3>
                            <span className="display-3">
                            💀
                            </span>
                        </p>
                        
                    </div>
                    </div>
                    
                </div></div></div>
                <div className="col"></div>
                
            </div>
 <br></br> <br></br>

        <h2 className="text-light ml-5 text-left">
            Other Stats :
        </h2>
        <br></br> <br></br>
        <div className="row">
                <div className="col">

                    <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Active</h2>
                        <p class="card-text">
                            <h3 className="text-danger">
                                {Country.active}
                            </h3>
                            <span className="display-3">
                            🏥 
                            </span>
                        </p>
                        
                    </div>
                    </div>
                 </div>

                <div className="col">
                   <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Critical</h3>
                        <p class="card-text">
                            <h3 className="text-success">
                                {Country.critical}
                            </h3>
                            <span className="display-3">
                            💉
                            </span>
                        </p>
                        
                    </div>
                    </div>
                </div>
                
                <div className="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Case Per Million</h3>
                        <p class="card-text">
                            <h3 className="text-muted">
                                {Country.deathsPerOneMillion}
                            </h3>
                            <span className="display-3">
                            💀
                            </span>
                        </p>
                        
                    </div>
                    </div>
                </div>
                <br></br><hr></hr>
            </div>
        
<div className="mb-5 ">
        <div className="mb-5">

        </div>
</div>
        </div>
    )
}

export default Country

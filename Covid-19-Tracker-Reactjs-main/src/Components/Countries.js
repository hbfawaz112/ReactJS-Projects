import React,{useState , useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Country from './Country'
function Countries() {



    //const url='https://coronavirus-19-api.herokuapp.com/countries';
    const [countries, setCountries] = useState('');
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
		getCountries();
	}, []);


    function getCountries() {
		axios
			.get('https://coronavirus-19-api.herokuapp.com/countries')
			.then((res) => {
                setCountries(res.data);
                //console.log(res.data)
			});
	}
    
    let contrs = [];
    for(let i =0;i<countries.length ; i++)
    {   
            contrs.push(countries[i]);
            //console.log(contrs[i]["country"])
    }

    function handleChange(e) {
		setSearchTerm(e.target.value);
    }
    
    function onSubmit(e) {
		e.preventDefault();
		let newCountries = [];
		for (let i = 0; i <= countries.length; i++) {
			if (
				countries[i] &&
				countries[i].country.toLowerCase().includes(searchTerm.toLowerCase())
			) {
				newCountries.push(countries[i]);
			}
		}
		setCountries(newCountries);
		console.log(newCountries);
	}
    
    return (
        <div>
            <h1 className="text-light">
            STATISTICS BROKEN DOWN BY COUNTRY    
            </h1>

            <hr></hr>

            <form className="form-inline d-flex justify-content-center" onSubmit={onSubmit}>
                <input type="text" className="form-control  w-25" placeholder=
                "Search Country" onChange={handleChange} ></input>
                &nbsp;&nbsp;
                <button type="submit" className="btn btn-secondary">
                    Search
                </button>
            </form>


<br></br>
<div className="row">
    <div className="col"></div>
    <div className="col-6">
            <table className="table  text-light table-bordered table-sm">
    <thead className="bg-secondary">
      <tr>
        <th><h3>Country</h3></th>
        <th><h3>Cases</h3></th>
        <th><h3>Recovered</h3></th>
        <th><h3>Death</h3></th>
        
        
      </tr>
    </thead>

    <tbody>
       {
           contrs.map(
               (value, index) => {
                    return(
                        <tr className="h4">
                <td>
                <Link to={{ pathname: `/country/${value.country}` }}>
                    {value.country}							
			    </Link>
                     
                           
                </td>
                <td>
                   {value.cases} 
                   <br></br>    <span>
                   😷 
                            </span>          
                </td>
                <td>
                   {value.recovered}   
                   <br></br>    <span>
                   🙂 
                            </span>            
                </td>
                <td>
                   {value.deaths}       
                   <br></br>    <span>
                   💀 
                            </span>        
                </td>
                
                </tr>
                    )
               }
           )
       }
    
    </tbody>
  </table></div>
  <div className="col"></div>
</div>
        </div>
    )
}

export default Countries

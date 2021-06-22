import React,{useState , useEffect} from 'react'
import axios from 'axios'
function Top5_countries() {
    
    const url='https://coronavirus-19-api.herokuapp.com/countries';
    const [countries, setCountries] = useState('');

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
    for(let i =1;i<countries.length ; i++)
    {   
        if(i==6){break;}
            contrs.push(countries[i]);
            //console.log(contrs[i]["country"])
    }

    return (
        <div>

           <h2 className="text-light">Top 5 Countries Cases in the world   </h2>
         <br></br>  <table class="table  text-light">
    <thead>
      <tr>
        <th><h5>Country</h5></th>
        <th><h5>Cases</h5></th>
        <th><h5>Recovered</h5></th>
        <th><h5>Deaths</h5></th>
      
      </tr>
    </thead>
    <tbody>
    {
           contrs.map(
               (value, index) => {
                    return(
                        <tr className="h4">
                <td>
                   {value.country}
                           
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
  </table>
        </div>
    )
}

export default Top5_countries

import React from 'react'

function About() {
    return (
        <div className="row text-light font-weight-bold lead text-monospace">
            <div className="col"></div>
            <div className="col-9">
            <h1 className="text-light">
				About COVID-19
			</h1>
            <br></br>
			<p className="h4">
				Coronavirus disease (COVID-19) is an infectious disease caused by a new
				virus. The disease causes respiratory illness (like the flu) with
				symptoms such as a cough, fever, and in more severe cases, difficulty
				breathing. You can protect yourself by washing your hands frequently,
				avoiding touching your face, and avoiding close contact (1 meter or 3
				feet) with people who are unwell.
			</p>
            <br></br>
			<h2 className="">
				How Does COVID-19 Spread?
			</h2>
			<p className="">
				Coronavirus disease spreads primarily through contact with an infected
				person when they cough or sneeze. It also spreads when a person touches
				a surface or object that has the virus on it, then touches their eyes,
				nose, or mouth.
			</p>
			<h2 className="">
				Sympotoms
			</h2>
			<div
				className="alert alert-success"
				role="alert"
			>
				<p className="">Call Your Doctor:</p>
				<p className="">
					If you think you have been exposed to COVID-19 and develop a fever and
					symptoms, such as cough or difficulty breathing, call your healthcare
					provider for medical advice.
				</p>
			</div>
			<p className="">
				If you develop emergency warning signs for COVID-19 get medical
				attention immediately.
			</p>
			
			<ul className="list-group text-dark text-left ">
               <li className="list-group-item h4">Emergency warning signs include*:</li>
				<li className="list-group-item">1- Difficulty breathing or shortness of breath</li>
				<li className="list-group-item">2- Persistent pain or pressure in the chest</li>
				<li className="list-group-item">3- New confusion or inability to arouse </li>
				<li className="list-group-item">4- Bluish lips or face</li>
				<span className="">
					*This list is not all inclusive. Please consult your medical provider
					for any other symptoms that are severe or concerning.{' '}
				</span>
			</ul>
			<div className="">
				<a
					href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
					target="_blank"
					rel="noopener noreferrer"
					className=""
				>
					More Information About COVID-19
				</a>
			</div>
			<h3 className="">
				How are we getting this data?
			</h3>
			<p className="">
				This application ingests data from{' '}
				<a
					href="https://github.com/javieraviles/covidAPI"
					target="_blank"
					rel="noopener noreferrer"
					className=""
				>
					this API
				</a>
				, which scrapes data from{' '}
				<a
					href=""
					target="_blank"
					rel="noopener noreferrer"
					className=""
				>
					this source
				</a>
				.
			</p>
</div>
<div className="col"></div>
        </div>
    )
}

export default About

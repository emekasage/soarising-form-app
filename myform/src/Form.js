import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export default function Form() {
    const spanStyle  = {display: "block", color: "#333", fontSize: "14px", paddingBottom: "7px"};
    const footNotestyle = {paddingTop: "8px", color: "#9b9b9b", fontSize: "14px"};
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({});
    const [mobileValid, setMobileValid] = useState(false);
    const [phoneValid, setPhoneValid] = useState(false);
    const [fieldTocomplete, setFieldToComplete] = useState([]);
    const validatePhoneNumber = (input_str) => {
      
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im;

        return re.test(input_str);
    }
    const handleChange = (e) => {
        
        var formTempData = {...formData};
        
        formTempData[e.target.name] = e.target.value;
        setFormData(formTempData);
    }

    const checkIfEmpty = (field) => {
        if(typeof formData[field] !== "undefined"){
            if(formData[field] === ""){
                return false;
            }else{
                return true;
            }
        }else{
            return false;
        }
    }

    const checkIfUndefined = (field) => {
       
        if(typeof formData[field] === "undefined"){
            return false
        }else{
            return true;
        }
    }

    const validate = (fields, validation) =>{
        var failed = [];
        var passed = [];
        for(var i=0; i< fields.length; i++){
            if(validation === "isDefined"){
                var check = checkIfUndefined(fields[i]);
                
                if(check){
                    
                    passed.push(fields[i]); 
                }else{
                    failed.push(fields[i]);
                }
            }
            if(validation === "isEmpty"){
                var check = checkIfEmpty(fields[i]);
                if(check){
                    passed.push(fields[i]); 
                }else{
                    failed.push(fields[i]);
                }
            }
        }
        return [passed, failed];
    }
    const submitData = () =>{
        if(typeof formData.referredBy !== "undefined"){
            if(formData.referredBy !== ""){
                if(mobileValid && phoneValid){
                var urlencoded = new URLSearchParams();
                        // urlencoded.append("name", "addsd");
                        // urlencoded.append("age", "122");

                    var requestOptions = {
                    method: 'POST',
                    body: formData,
                    redirect: 'follow'
                    };

                    fetch("http://dummy.restapiexample.com/api/v1/create", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result)
                        setPage(4);
                    })
                    .catch(error => {
                        console.log('error', error)
                        setPage(5);
                    });

                }else{
                    alert("KIndly check Field with Errors")
                }
            }else{
                //sumtin is empty
            }
        }else{
            //sumtin is undefinred
        }

    }

    const printErrorMessage = (fieldToCheck) =>{
        return fieldTocomplete.map((field, index)=>{
               if(field === fieldToCheck ){
              return (<div style={{color: "#d31119"}} key={index} > Kindly fill this field</div>);
           
            }
        });
    }
    return (
        <div>
              <div className="container">
    <section>
        <div className="row">
            <div className="col-md-11 mt-4">
                <span>
                    <img src="assets/img/SOARising.png" alt="" />
                </span>

{page === 1 &&
                <div className="section_title">

                    <h1>Application Form</h1>

                    <h3>Section 1 - About you</h3>
                       


                        <div className="row">
                            <div className="form-group col">
                                <label>First name</label>
                                {printErrorMessage("firstname")}
                                <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="firstname" value={typeof formData["firstname"] === "undefined"? "": formData["firstname"]}  required/>
                                <span>This will not appear on your project page but will be seen when emailing contributors and members of the SOArising platform
                                    about your project.
                                </span>
                                    
                            </div>
                            <div className="form-group col">
                                <label>Last name</label>
                                {printErrorMessage("lastname")}
                                <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  value={typeof formData["lastname"] === "undefined"? "": formData["lastname"]} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="profileName">Choose a profile name</label>
                            {printErrorMessage("profileName")}
                            <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="profileName" value={typeof formData["profileName"] === "undefined"? "": formData["profileName"]}/>
                            <span>This will appear to the public on your project page and as sponsor of the project.
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="aboutYou">About you</label>
                            <textarea rows="8" type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="aboutYou" value={formData["aboutYou"]}></textarea>
                            <span>Enter your personal bio. Tell us a little bit about yourself and give SOArising members and potential
                                contributors a sense of who you are and what you are about.
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="how">How did you hear about Soarising? </label>
                            {printErrorMessage("referredBy")}
                            <span style={spanStyle}>Please select one</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="referredBy" value="friend" checked={formData.referredBy === "friend" ? true : false } />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                A friend referred me (Add member referral code here <input type="text" className="form-control form-control-sm" onChange={(e)=>handleChange(e) }  name="referralCode" value={formData["referralCode"]}/>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="referredBy" value="workshop" checked={formData.referredBy === "workshop" ? true : false } />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                At an event, seminar or workshop I attended
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="referredBy" value="communityDev" checked={formData.referredBy === "communityDev" ? true : false }/>
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                From another Community Development Organisation
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="referredBy" value="googleSearch" checked={formData.referredBy === "googleSearch" ? true : false }/>
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                I searched Google to compare different Community Development Platforms
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="referredBy" value="socialMedia" checked={formData.referredBy === "socialMedia" ? true : false }/>
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Through Social media; Facebook, Instagram or Twitter etc
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="how">Have you used SOArising before to raise money for your projects? </label>
                            {printErrorMessage("raisedMoneyBefore")}
                            <span style={spanStyle}>Please select one</span>
                        </div>

                        <div className="form-check form-check-inline">
                            <label className="form-check-label-2" htmlFor="inlineradio1">Yes</label>
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="raisedMoneyBefore" value="yes" checked={formData.raisedMoneyBefore === "yes" ? true : false } /> 
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label-2" htmlFor="inlineradio2" >No</label>
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="raisedMoneyBefore" value="no"  checked={formData.raisedMoneyBefore === "no" ? true : false } />
                          </div>

                          <div className="form-group">
                            <label htmlFor="how">If you answered Yes to the question above , how much have you
                                raised through SOArising for you projects in the last two years?
                                 </label>
                            <span style={spanStyle}>Please select one</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="defaultCheck2" value={formData["LessThan$5000"]} />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Less than $5000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="defaultCheck2" value={formData["$5000to$10000"]} />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Between $5,000 - $10,000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="defaultCheck2" value={formData["Above$10000"]} />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Above $10,000
                            </label>
                        </div>

                          <div className="form-group">
                            <label htmlFor="how">Have you raised money through other crowdfunding platforms before? </label>
                            <span style={spanStyle} >Please select one</span>
                        </div>

                        <div className="form-check form-check-inline">
                            <label className="form-check-label-2" htmlFor="inlineradio1">Yes</label>
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="inlineradio1" value={formData["option1"]} /> 
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label-2" htmlFor="inlineradio2">No</label>
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="inlineradio1" value={formData["option2"]} />
                          </div>

                          <div className="form-group">
                            <label htmlFor="how">Did you raise the money you needed for your Project through these
                                other platforms? </label>
                            <span style={spanStyle}>Please select one</span>
                        </div>

                        <div className="form-check form-check-inline">
                            <label className="form-check-label-2" htmlFor="inlineradio1">Yes</label>
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="inlineradio1" value={formData["option1"]} /> 
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label-2" htmlFor="inlineradio2">No</label>
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="inlineradio1" value={formData["option1"]} />
                          </div>

                          <button type="button" className="btn btn-danger" onClick={()=>{
                              var checkEmpty = validate(["firstname","lastname","profileName","referredBy","raisedMoneyBefore"], "isEmpty");                       
                              setFieldToComplete(checkEmpty[1]);
                              if(typeof checkEmpty[1][0] === "undefined"){
                                setPage(2);
                              }
                            }}>Next</button>
                  
                </div>

}

{page === 2 &&
                <div className="section_title">

                    <h1>Application Form</h1>

                    <h3>Section 2 - About Organisation</h3>


                        <div className="form-group">
                            <label htmlFor="how">Type of organization</label>
                            <span style={spanStyle} >Please select one</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="typeOfOrganisation" value={formData["Charity"]} />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                A registered Charity
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="typeOfOrganisation" value={formData["Organisation"]} />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                A registered organisation
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="typeOfOrganisation" value={formData["Business"]} />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                A registered business
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={(e)=>handleChange(e) }  name="typeOfOrganisation" value={formData["Individual"]} />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                An individual/sole trader
                            </label>
                        </div>

                        <span style={footNotestyle}>
                            Please select the 'Individual or sole trader' option if your organisation or business is
                            not registered
                        </span>
                        
                        <div className="form-group">
                            <label htmlFor="profileName">Organisation Name</label>
                            <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="organisationName" value={formData["organisationName"]} />
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Office Telephone {!phoneValid && <span style={{color:"red"}}>( Enter a valid phone number )</span>}</label>
                                <PhoneInput type="tel" country={'ng'} value={formData.telephone} id="telephone" className="form-control form-control-lg" onChange={(phoneno)=> { 
                                    
                                    var e = {target: {name:"telephone", value:phoneno}}
                                    handleChange(e)
                                    if(validatePhoneNumber(e.target.value)){
                                        setPhoneValid(true)
                                    }else{
                                        setPhoneValid(false)
                                    }
                                }}  name="telephone" name="phone" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mobile{!mobileValid && <span style={{color:"red"}}> ( Enter a valid phone number )</span>}</label>
                                <PhoneInput type="tel" country={'ng'} value={formData.phone} id="phone" className="form-control form-control-lg" onChange={(phoneno)=>{
                                    var e = {target: {name:"phone", value:phoneno}}
                                    handleChange(e) 
                                    if(validatePhoneNumber(e.target.value)){
                                        setMobileValid(true)
                                    }else{
                                        setMobileValid(false)
                                    }
                                    }}  name="phone" />
                                
                            </div>
                            
                        </div>

                        <div className="container">
                            <span  style={footNotestyle}>
                                From time to time SOArising may need to contact you about your project or potential extra funding opportunities. 
                                To find out more about how we use your personal information, check out our <span style={{ color:" #333", fontWeight: "bolder"}}>Privacy Policy</span> here.
                            </span>
                        </div>

                        



                          

                          <button type="button" className="btn btn-danger sec2"  onClick={()=>setPage(1)}>Previous</button>
                          <button type="button" className="btn btn-danger sec2" onClick={()=>setPage(3)}>Next</button>
                    

                </div>

}
{page === 3 &&
                <div className="section_title">

                    <h1>Application Form</h1>

                    <h3>Section 3 - About your community project</h3>

                    <div className="container">
                        <span>
                            Please provide key information so that your project makes an instant connection with
                            SOArising members and potential contributors.

                        </span>
                    </div>

                   

                        <div className="form-group">
                            <label htmlFor="profileName">What is the name of your project?</label>
                            <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="projectName" value={formData["projectName"]}/>
                            <span>This will be the first thing a potential supporter will see, so be clear and concise to give the best possible sense of what your
                                project is all about.                                            
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="how">Project Category</label>
                            <span style={{spanStyle}}>Please select one</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Charities
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Community
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Creative and Arts
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Education
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Health
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Music
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Religions
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                School/University
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Social enterprise
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Others (please indicate)  <input type="text" className="form-control form-control-sm" onChange={(e)=>handleChange(e) }  name="others" value={formData["others"]}/>
                            </label>
                        </div>
                        

                        <div className="form-group">
                            <label htmlFor="profileName">Where is your project based?</label>
                            <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="profileBased" value={formData["projectBased"]}/>
                            <span>Full address including the postal code</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="aboutYou">Your Story</label>
                            <textarea rows="8" type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="yourStory" value={formData["yourStory"]}></textarea>
                            <span>
                                Explain your project simply and concisely. This is the first description the SOArising community will see/read. Help our community
                                members to understand what your project is about, its aims and vision, this way, you are likely to get greater participation.
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="profileName">How much do you want to raise?</label>
                            <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="raiseAmount" value={formData["raiseAmount"]}/>
                            <span>
                                Be practical. How much do you need to make your idea happen, and how many contributors do you think you can reach?
                                Remember, you can always 'stretch' your target once you hit it.

                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="how">Select a funding Method</label>
                            <span style={{spanStyle}}>Please select one</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                All or Nothing
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Keep what you raise ( Recommended)
                            </label>
                        </div>
                        <span style={footNotestyle}>
                            It is free to create a project on SOArising. If you run an 'All or nothing' project and you hit your target, a platform fee of <span 
                            style={{color: "#333", fontSize: "13.3px"}}>$5 is deducted from each $20</span> donation made. If you don't hit your target, you pay 
                            nothing, and funds are returned by SOARising to contributors unless an alternative project has been selected by the contributor(s). 
                            'Keep what you raise' projects will always pay the platform fee, regardless of how much is raised. Please see SOArising <span style={{color: "D31119", fontSize: "13.3px"}}>terms and conditions.</span>


                        </span>

                        <div className="form-group">
                            <label htmlFor="how">Who is likely to benefit from the program?</label>
                            <span style={{spanStyle}}>Please select one</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Chuldren ( 0 - 11)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Young people (12-25)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Older People (60+)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Disabled Persons (learning/physical)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Mental Health Needs
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Health Conditions
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Living in Poverty
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Homeless
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="how">What are the potential outcomes?</label>
                            <span style={{spanStyle}}>Please select all that applies</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Improved access to training and education 
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Improved access to appropriate housing and accommodation facilities A registered organisation
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Improved healthcare (physical, mental health and well-being)
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" onChange={(e)=>handleChange(e) }  name="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Increased participation in faith programmes
                            </label>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="profileName">How long do you want your project to run for on SOArising?</label>
                            <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="profileName" placeholder="Weeks (Maximum of 12)" />
                            <span>We recommend running your project for four weeks but choose 
                                the length of time that you think is best for your project.                                            
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="profileName">Target Go Live Date</label>
                            <input type="text" className="form-control form-control-lg" onChange={(e)=>handleChange(e) }  name="profileName" placeholder="MM/DD/YY" />
                            <span>We recommend running your project for four weeks 
                                but choose the length of time that you think is best for your project.                                           
                            </span>
                        </div>

                        <button type="button" className="btn btn-danger sec2"  onClick={()=>setPage(2)}>Previous</button>
                        <button type="button" className="btn btn-danger sec2" onClick={()=>submitData()}>Submit</button>
                    

                </div>
}

{page === 4 &&
<div>
    Thank you for filling the form.
</div>
}

{page === 5 &&
<div>
    Error submitting the form.
</div>
}

            </div>
        </div>
    </section>

</div>
  
        </div>
    )
}

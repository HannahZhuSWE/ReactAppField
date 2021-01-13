import {handleSubmit} from '../UIValidationRules';
import { useState } from 'react';


const Title = () => {
    return <div>Simple Form </div>
}
 
const Form = () => {
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [option, setOption] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    /*const NameTextField = () => {
        return 
    }
    
    const AgeTextField = () => {
        return <TextField label="Age" type = "number" name="age" value={age} onChange = {setAge} reset = {setSubmit} />
    }
    */
    const OptionsSelect = () => {
        return (<div>
                <label >
                Options 
                <select value = {option} onChange = {event => {setSubmit(false); setOption(parseInt(event.target.value))}}>
                    <option value="0"> --select-- </option>
                    <option value="1"> Option 1</option>
                    <option value="2"> Option 2</option>
                    <option value="3"> Option 3</option>
                </select>
                </label>
                <br></br>
                <br></br>
                </div>)
    }
    
    const SubmitButton = () => {
        return <div> <input type = "submit"/> </div>
    }
    
    const SuccessMessage = () => {
        if(submit){
            return (<div>Name: {name} &emsp; Age: {age} &emsp; Option: Option {option} <br></br> <br></br></div> )
        }
        else{
            return (<div></div>)
        }
    }
      
    const ErrorMessage = () => {
        if(error){
            return (<div className = "Error-message">{errorMessage} <br></br> <br></br></div>)
        }
        else{
            return (<div></div>)
        }
    }
    
    
    
    return (<form key = "form" onSubmit = {event => handleSubmit(event, setSubmit, setError,setErrorMessage, setAge, name , age, option )}> 
            <SuccessMessage/>
            <ErrorMessage/>
            <TextField label="Name" type = "string" name="name" value={name} onChange = {setName} reset= {setSubmit} />
            <TextField label="Age" type = "number" name="age" value={age} onChange = {setAge} reset = {setSubmit} />
            <OptionsSelect/>
            <SubmitButton/>
            </form>)
}

const TextField = (props: any) => {
    const divKey = "div"+props.label;
    const labelKey = "div"+props.label;
    
    return (<div key = {divKey}>
            <label key = {labelKey}>
            {props.label} 
            <input type = {props.type}
                   key = {props.name} 
                   name = {props.name}
                   id = {props.name}
                   placeholder = {props.label}
                   value = {props.value}
                   onChange = {event =>{handler(event, props.reset, props.onChange)}}
                   />
          </label>
          <br></br>
          <br></br>
          </div>)
  }
  

const handler = (event:any, reset:Function, onChange:Function)=>{
    reset(false);
    onChange(event.target.value);
}

export{Title, Form, TextField}
      
const handleSubmit = (event :any, setSubmit : Function, setError: Function, setErrorMessage : Function, setAge : Function, name : string, age : string, option : number) => {
    event.preventDefault();
    if(age === ''){
        setError(true);
        setSubmit(false);
        setErrorMessage("Age can't be empty");
    }
    else if (parseInt(age, 10) < 0){
        setAge('');
        setError(true);
        setSubmit(false);
        setErrorMessage("Age can't be negative");
    }
    else if(option === 0){
        setError(true);
        setSubmit(false);
        setErrorMessage("Must select an option");
    }
    else{
        setError(false);
        setSubmit(true);
        setErrorMessage('');
    }
};

export{ handleSubmit}
import React,{Component} from "react";
const Form=()=>{
    const FirstName=()=>{
        
    }
    const Submit=(data)=>{
        console.log(data)

    }
    return(
       <form>
            <h1>Form</h1>
            <label>FirstName :-
                <input type="text" />
            </label><br/><br/>
            <label>LastName :-
                <input type="text" />
            </label><br/><br/>
            <label>Email :-
                <input type="email" />
            </label><br/><br/>
            <label>Phone Number :-
                <input type="number" />
            </label><br/><br/>
            <label>Gender :-
                Male<input type="radio" />
                Female<input type="radio" />
            </label><br/><br/>
            <button onClick={Submit}>Submit</button>

        </form>
    )
}
export default Form;
function Student(props){
    //this is called destructuring the object
    const {name,email,address}=props;
    return(
        <>
        {/* <h1>This is componnet1</h1> */}
        {/* <h2>Hello {props.name} </h2>
        <p>EMail {props.email} </p>
        <h3>{props.other.address}</h3> */}

        <h2>Hello {name} </h2>
        <p>EMail {email} </p>
        
        
        </>
    )
}
export default Student
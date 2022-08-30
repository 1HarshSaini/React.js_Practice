function Student(props){
    return(
        <>
        {/* <h1>This is componnet1</h1> */}
        <h2>Hello {props.name}</h2>
        <p>EMail { props.email}</p>
        </>
    )
}
export default Student
const getNewToDO = async(id) => {
    let response = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`)
    //console.log ('>>> check response: ', response)
    if (response && response.status != 200){
        throw new Error(' Something wrongs with status code: '+ response.status) 
        // error la 1 obj tao ra loi
    }
    let data = await response.json();
    return data;// resolve dong so 3
}
 getNewToDO('asd'). then( data => {
    console.log ('>>>> check get data: ', data)
 })
    .catch( err => {
        console.log ('>>>> check error: ', err.message)
    })
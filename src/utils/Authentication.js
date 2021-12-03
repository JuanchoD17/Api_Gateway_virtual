const {ApolloError} = require ('apollo-server')
const serverconfig  = require ('../server')
const fetch         = require ('node-fetch');



const authentication = async ( {req} ) =>{

    const token = req.headers.authorization  || '';
    
    if(token == '')
        return{userIdToken: null}
    else{
        try{
            let requestOptions = {

                methond : 'POST', headers:{"content-type":"application/json"},
                body: JSON.stringify( {token} ), redirect: 'follow'
            };

            let response = await fetch(`${serverconfig.auth_api_url}/verifyToken/`,requestOptions)

        if (response.status != 200){

            console.log(response)

            throw new ApolloError(`SECION INACTIVA ${401}`+ response.status, 401)
        }
        return{userIdToken: (await response.JSON()).UserId};
        }
        catch (console){

            throw new ApolloError(`TOKEN ERROR ${500}: ${error}`, 500)

        }
        
    }
    
}

module.exports = authentication;
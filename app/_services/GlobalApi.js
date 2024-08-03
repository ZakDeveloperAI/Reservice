import { gql, request } from 'graphql-request'


const MASTER_URL='https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/'+process.env.NEXT_PUBLIC_MASTER_URL_KEY+'/master'

const  getCategory=async()=>{
const query=gql `
    query Category {
        categories {
        bgcolor {
            hex
        }
        id
        name
        icon{
            url
        }
    }
    }`

    const result= await request(MASTER_URL,query)
    return result
}

export default{
    getCategory
}
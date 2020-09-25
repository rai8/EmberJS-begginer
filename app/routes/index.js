import Route from '@ember/routing/route'

const COMMUNITY_CATEGORIES=['Condo', 'TownHouse', 'Apartment']

export default class IndexRoute extends Route{
    //model hook is resposible for fetching and preparing data needed for the route
    async model(){
       let response = await fetch('/api/rentals.json')
       let { data }= await response.json()
       return data.map(model=>{
           let { attributes } = model
           let type;

           if(COMMUNITY_CATEGORIES.includes(attributes.category)){
               type= "Community"
           }
           else{
               type= "Standalone"
           }

           return { type, ...attributes}
       })
    }
}
export default function getQuery(name:string,fallback:string){
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
return urlParams.get(name) || fallback 
}
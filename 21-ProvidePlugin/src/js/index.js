import "index.html";
import "index.scss";
import axios from "axios";
import JqClick from "JqClick";

$(function() {
    
    axios.get("https://www.instagram.com/explore/tags/LeagueofLegends/?__a=1").then(res=>{
        console.log('LeagueofLegends: ',res.data);
    }).catch(err=> console.error(err));

    JqClick();
})
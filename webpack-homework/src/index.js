import axios from "axios";
import msg from "./msg.txt"
import "./style.styl"
document.getElementById("msg").innerText = msg

axios.get("https://www.baidu.com").then(data=>{
    console.log(data)
})

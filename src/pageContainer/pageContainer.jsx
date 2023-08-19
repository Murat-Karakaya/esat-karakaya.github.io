import BackEnd from "./pages/Back-End";
import FrontEnd from "./pages/Front-End";
import About from "./pages/About";
import Education from "./pages/Education";
import "./pageStyle.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PageContainer=()=>{
    const pageId=useSelector((state)=>state.pageSlice.pageId)
    useEffect(()=>{
        console.log(pageId)
        document.getElementById("page"+pageId)
        .scrollIntoView({behavior:"smooth"})
    },[pageId])

    return(
        <div id="pageContainer">
            <About/>
            <FrontEnd/>
            <BackEnd/>
            <Education/>
        </div>
    )
}
export default PageContainer
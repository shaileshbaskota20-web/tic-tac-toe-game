
function Division({handleonclick,arrayy}){
    return <>
{arrayy.map((item,index)=><div className="inside" onClick={()=>handleonclick(index)}>{item}</div>)}

</>
}




export default Division;
import Division from './component/divs'
import Result from './component/result';
import './App.css'
import { useState } from 'react';

function App() {


  const [arrayy,setarrayy]=useState(["","","","","","","","",""]);


  let [winner,setwinner]=useState("");

  let [count, setcount] = useState(1);
  let [lock, setlock] = useState("false");

  const handleonclick = (index) => {
 
     if(lock === "true"){
      return 0;
    }
    else if (arrayy.every((arr)=> arr=== "X" || arr === "O")){
        return 0;
    }
    else if (count % 2 === 0) {
      let newarrayy=[...arrayy];
      newarrayy[index]="X";
      setarrayy(newarrayy);
      let newcount = count + 1;
      setcount(newcount);
         checkwinner(newarrayy);
    }
    else if(count % 2 !== 0) {
      let newarrayy=[...arrayy];
      newarrayy[index]="O";
      setarrayy(newarrayy);
      let newcount = count + 1;
      setcount(newcount);
       checkwinner(newarrayy);
    }
    
  };

  const checkwinner =(newarrayy)=>{
    if (newarrayy[0]==="X" && newarrayy[1]===newarrayy[0] && newarrayy[2]===newarrayy[1] && newarrayy[2]!=="" ){
      setlock("true");
      setwinner("X is winner");
    }

    
    else if (newarrayy[3]==="X" && newarrayy[4]===newarrayy[3] && newarrayy[5]===newarrayy[4] && newarrayy[5]!=="" ){
      setlock("true");
       setwinner("X is winner");
    }

   else if (newarrayy[6]==="X" && newarrayy[7]===newarrayy[6] && newarrayy[8]===newarrayy[7] && newarrayy[8]!=="" ){
      setlock("true");
       setwinner("X is winner");
    }
    else if(newarrayy[0]==="X" && newarrayy[3]===newarrayy[0] && newarrayy[6]===newarrayy[3] && newarrayy[6]!=="" ){
        setlock("true");
       setwinner("X is winner");
    }
    else if(newarrayy[1]==="X" && newarrayy[4]===newarrayy[1] && newarrayy[7]===newarrayy[4] && newarrayy[7]!=="" ){
        setlock("true");
       setwinner("X is winner");
    }
    else if(newarrayy[2]==="X" && newarrayy[5]===newarrayy[2] && newarrayy[8]===newarrayy[5] && newarrayy[8]!=="" ){
        setlock("true");
       setwinner("X is winner");
    }
    else if(newarrayy[0]==="O" && newarrayy[1]===newarrayy[0] && newarrayy[2]===newarrayy[1] && newarrayy[2]!=="" ){
      setlock("true");
      setwinner("O is winner");
    }
    else if (newarrayy[3]==="O" && newarrayy[4]===newarrayy[3] && newarrayy[5]===newarrayy[4] && newarrayy[5]!=="" ){
      setlock("true");
       setwinner("O is winner");
     }
      else if (newarrayy[6]==="O" && newarrayy[7]===newarrayy[6] && newarrayy[8]===newarrayy[7] && newarrayy[8]!=="" ){
      setlock("true");
       setwinner("O is winner");
    }
     else if(newarrayy[0]==="O" && newarrayy[3]===newarrayy[0] && newarrayy[6]===newarrayy[3] && newarrayy[6]!=="" ){
        setlock("true");
       setwinner("O is winner");

  }
      else if(newarrayy[1]==="O" && newarrayy[4]===newarrayy[1] && newarrayy[7]===newarrayy[4] && newarrayy[7]!=="" ){
        setlock("true");
       setwinner("O is winner");
    }
    else if(newarrayy[2]==="O" && newarrayy[5]===newarrayy[2] && newarrayy[8]===newarrayy[5] && newarrayy[8]!=="" ){
        setlock("true");
       setwinner("O is winner");
    }
    else if(newarrayy[0]==="O" && newarrayy[4]===newarrayy[0] && newarrayy[8]===newarrayy[4] && newarrayy[8]!=="" ){
           setlock("true");
       setwinner("O is winner");
    }
    else if(newarrayy[2]==="O" && newarrayy[4]===newarrayy[2] && newarrayy[6]===newarrayy[4] && newarrayy[6]!=="" ){
        setlock("true");
       setwinner("O is winner");
    }
        else if(newarrayy[0]==="X" && newarrayy[4]===newarrayy[0] && newarrayy[8]===newarrayy[4] && newarrayy[8]!=="" ){
           setlock("true");
       setwinner("X is winner");
    }
    else if(newarrayy[2]==="X" && newarrayy[4]===newarrayy[2] && newarrayy[6]===newarrayy[4] && newarrayy[6]!=="" ){
        setlock("true");
       setwinner("X is winner");
    }
  };
  const handleonbutton=()=>{
    setarrayy(["","","","","","","","",""]);
  };

  return (
    <>
      <div className="container">
        <h1>TIC TAC TOE</h1>
        <Result winner={winner}></Result>
        <div className="main">
          <Division handleonclick={handleonclick} arrayy={arrayy}></Division>
          <button onClick={handleonbutton}>RESET</button>
        </div>
      </div>
    </>
  )
}

export default App;

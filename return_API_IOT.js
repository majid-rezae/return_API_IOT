 function Fore2   ()  {
           const   selectedDevice = useSelector((state) => state.devicesState.selectedDevice); // Rule 1: call hooks in top-level
      
      //  const selectedDevice = useSelector((state) => state.devicesState.selectedDevice)
        // const   fser  =  "8cf9574000000012"
         const [error, setError] = useState(null);
         const  [isLoaded, setIsLoaded] = useState(false);
         const   [homes, setHomes] = useState([]);
  
         useEffect(() => {
           setTimeout(() => {
            fetch(`https://iotibti.ddns.net:7999/forecast?dev_eui=${selectedDevice}`)
             .then (res => {
               return res.json();
             })
             .then(result => {
              setIsLoaded( true) ;
              setHomes( result);
             })
             .catch(err => {
                console.log(err.message);
                
                setIsLoaded( true) 
                setError()
             })
            },1000);
          },[]);
        
          
         const pdfa =     homes.map((home, i) => {
          return (
             <div>
        { `   {  a :  '${home.index.Row_1 }'  } ,{  a :  ${home.index.Row_1 }  }   `} 
       
            </div> 
          );
        });  
 
//inject j as property into Test
  
         const pdata =     homes.map((home, i) => {
          return (
             <div>{home.index.Row_1 }  
            </div> 
          );
        });  
        
        return(
           
          <div> 
            <p>{pdata} </p>  
          </div>
           
      
        )
      }

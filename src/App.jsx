const App = () =>{
          
          const name = "melvin";

          let elements = [];

          for (let i = 0; i < 10; i++) {
                    elements.push("Element " + i);
          }

          return (
                    <div>
                              <h1>🚀 Projet JSX pur</h1>
                              <p>Ceci est une application React de base.</p>
                              <p>Bonjour {name}!</p>


                              <ul>

                                        {

                                                  elements.map((item, index) => (
                                                            <li key={index}>{item}</li>
 
                                                  ))

                                        }

                              </ul>


                  </div>

                  
                    
          )
}

export default App;
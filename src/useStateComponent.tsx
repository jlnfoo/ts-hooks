import {useState} from 'react';

//create an array, have a button that pushes it to array
function UseStateComponent() {
    const [arr, setArr] = useState<number[]>([]); //declare a type 
    const [name, setName] = useState<string | null>(null);
    
    return (
        <div>
            <div>
                {/* takes original array and adds to it */}
                <button onClick={() => setArr([...arr, arr.length +1])}>
                    Add to array
                    </button>
                {JSON.stringify(arr)}
            </div>

            <div>
                <button onClick={() => setName("Tomo")}>
                    Set name
                    </button>
                {JSON.stringify(name)}
            </div>  
        </div>
    )
}

export default UseStateComponent;
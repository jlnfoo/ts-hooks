import { useState ,useContext } from 'react';
import UserContext, {UserState} from './store';

function ConsumerComponent() {
    const user = useContext<UserState>(UserContext);

    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}
function UseContextComponent() {
    const [user, setUser] = useState<UserState>({
    first: "Daisy",
    last: "Sun"
    });
    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button 
            onClick={() => setUser ({
                first: "Rosie",
                last: "Posie"
            })}
            >Change name</button>
        </UserContext.Provider>
    )
}

export default UseContextComponent;
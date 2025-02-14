import React, { useState } from 'react'

//Example for updating an Array using State
const StateExp2 = () => {

    const [friends, setFriends] = useState(['Alex', 'John'])

    const addOneFriend = () => setFriends([...friends, 'Graham Bell'])

    const removeOneFriend = () => setFriends(friends.filter(friend => friend !== 'John'))

    const updateOneFriend = () => {
        setFriends(friends.map(friend => friend == 'Alex' ? "Alex Smith" : friend))
    }

    // To remove a friend from a position, so this will remove each friend in a click
    // const removeOneFriend = () => setFriends([friends.splice(1,1)])

  return (
    <div>
        {friends.map((friend) => (
            <li key={Math.random()}>
                {friend}
            </li>
        ))}
        <button onClick={addOneFriend}>Add Friend</button>
        <button onClick={removeOneFriend}>Remove Friend</button>
        <button onClick={updateOneFriend}>Update Friend</button>

    </div>
  )
}

export default StateExp2
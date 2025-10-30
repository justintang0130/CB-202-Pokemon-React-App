import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HomePage() {
    // define state variable to keep track of entered pokemon
    const [name, setName] = useState("")

    // allows us to navigate to new pages
    const navigate = useNavigate()

    // set name state variable to what user has most recently entered
    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    // go to unique Pokemon page
    const handleSearch = () => {
        navigate(`/pokemon/${name}`)
    }

    return (
        <>
            {/* Input field to handle user entering Pokemon */}
            <input
                type = "text"
                placeholder = "Enter name"
                value = {name}
                onChange = {handleNameChange}
            />

            {/* Button to search for Pokemon */}
            <button  onClick = {handleSearch}> Search</button>
        </>
    )
}

export default HomePage
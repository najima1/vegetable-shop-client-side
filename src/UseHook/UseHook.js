import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Edibles ${ title }`
    }, [title])
}


export default useTitle
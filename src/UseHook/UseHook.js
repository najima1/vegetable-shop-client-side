import { useEffect } from "react"

const useTitle = ({ title }) => {
    useEffect(() => {
        document.title = `Restaurant ${ title }`
    }, [title])
}


export default useTitle
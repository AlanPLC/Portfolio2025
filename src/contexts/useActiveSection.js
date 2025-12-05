import { useContext } from "react"
import ActiveSectionContext from "./ActiveSectionContext.jsx"

export default function useActiveSection(){
 return useContext(ActiveSectionContext)
}
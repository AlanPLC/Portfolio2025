import { useContext } from "react"
import ActiveSectionContext from "./activeSectionContext.jsx"

export default function useActiveSection(){
 return useContext(ActiveSectionContext)
}
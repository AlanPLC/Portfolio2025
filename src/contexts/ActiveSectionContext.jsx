import { useState, useRef, useEffect, createContext } from "react";

const ActiveSectionContext = createContext()

export function ActiveSectionProvider( {children}){
    const [active, setActive] = useState('home')
    const sectionsRefs = useRef({})

    useEffect(()=>{
        const sectionObserver = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if (entry.isIntersecting){
                    setActive(entry.target.id)
                }
            })
        },
    {
        threshold: 0.2,
        rootMargin: "-80px 0px 0px 0px"
    }
    )
    Object.values(sectionsRefs.current).forEach((sec)=>sec && sectionObserver.observe(sec))
    return ()=> sectionObserver.disconnect()
    },[])

    return (
        <ActiveSectionContext.Provider value={{active, sectionsRefs}}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export default ActiveSectionContext;

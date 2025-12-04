import { useState, useRef, useEffect } from "react";

export default function useActiveSection(){
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
    {threshold: 0.6}
    )
    Object.values(sectionsRefs.current).forEach((sec)=>sec && sectionObserver.observe(sec))
    return ()=> sectionObserver.disconnect
    },[])

    return {active, sectionsRefs}
}
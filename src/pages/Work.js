import Hero from '../components/Work/Hero'
import { useState } from 'react';


export default function Work() {
    const [activeTabIndex, setActiveTabIdex] = useState(0);

    return (
        <div className="work_wrapper">
            <section>
                <Hero
                    activeTabIndex = {activeTabIndex}
                    onActiveIndexChange = {setActiveTabIdex} />
            </section>
        </div>
    )
}

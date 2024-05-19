'use client'
import { List, PanelsTopLeft, PanelLeft, SquarePen } from 'lucide-react'
import { useState } from 'react'
import Sidebar from '@/components/sidebar/sidebar'
import SelectProjectDirectoryModal from '@/components/modals/select-project-directory-modal'

const HeaderSidebar = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <div className="flex w-full absolute top-0 p-4 items-center gap-2">
                <button onClick={() => setExpanded(!expanded)} className="p-2">
                    <PanelsTopLeft size="1.4rem"/>
                </button>
                <a href="/" className="text-white text-xl font-semibold">
                    Devon
                </a>
                <SelectProjectDirectoryModal
                    trigger={
                        <button
                            className={`ml-[82px] p-2 ${expanded ? 'visible' : 'hidden'}`}
                        >
                            <SquarePen size="1.4rem" className="text-primary" />
                        </button>
                    }
                    header={<h1 className="text-3xl font-bold mb-5">Create new chat</h1>}
                />
            </div>
            <Sidebar expanded={expanded} setExpanded={setExpanded} />
        </>
    )
}

export default HeaderSidebar

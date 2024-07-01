import React from 'react'
import { Title } from '@/app/dashboard/(dashboard)/shipments/components/Title'
import { BreadcrumbPersonalized } from './Breadcrumb'

export function Header() {
    return (
        <div className="pb-4 border-b-[1px] border-b-[#EEEEEE]">
            <BreadcrumbPersonalized/>
            <Title text='Resumen de envío' />
        </div>
    )
}

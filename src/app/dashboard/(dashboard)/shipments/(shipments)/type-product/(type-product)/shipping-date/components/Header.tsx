import React from 'react'
import { BreadcrumbPersonalized } from './Breadcrumb'
import { Title } from '@/app/dashboard/(dashboard)/shipments/components/Title'

export function Header() {
    return (
        <div className="pb-4 border-b-[1px] border-b-[#EEEEEE]">
            <BreadcrumbPersonalized />
            <Title text='Fecha de envío' />
        </div>
    )
}

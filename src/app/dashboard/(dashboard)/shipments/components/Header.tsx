import React from 'react'
import { BreadcrumbPersonalized } from './Breadcrumb'
import { Title } from './Title'

export function Header() {
    return (
        <div className="pb-4 border-b-[1px] border-b-[#EEEEEE]">
            <BreadcrumbPersonalized />
            <Title text='Generar envío' />
        </div>
    )
}

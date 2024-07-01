import React from 'react'
import { Title } from '../../../components/Title'
import { BreadcrumbPersonalized } from './Breadcrumb'

export function Header() {
    return (
        <div className="pb-4 border-b-[1px] border-b-[#EEEEEE]">
            <BreadcrumbPersonalized />
            <Title text='Tipo de producto' />
        </div>
    )
}

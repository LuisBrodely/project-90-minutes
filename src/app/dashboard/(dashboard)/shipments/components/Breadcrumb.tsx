import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbPersonalized() {
    return (
        <Breadcrumb className="mt-8">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/account" className="text-[#757575] text-base font-medium">Mi cuenta</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/docs/components" className="text-base text-[#7C3AED] font-medium">Generar envío</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

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
                    <BreadcrumbLink href="/dashboard/shipments" className="text-[#757575] text-base font-medium">Generar envío</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/shipments/type-product" className="text-[#757575] text-base font-medium">Tipo de producto</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/shipments/type-product/shipping-date" className="text-[#757575] text-base font-medium">Fecha de envío</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/shipments/type-product/shipping-date/payment" className="text-[#757575] text-base font-medium">Pago</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/shipments/type-product/shipping-date/payment/shipping-summary" className="text-base text-[#7C3AED] font-medium">Resumen de envío</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

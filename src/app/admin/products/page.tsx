import { PageHeader } from "../_components/PageHeader" 
import { Button } from "@/components/ui/button"
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function AdminProductsPage(){
    return <>
    <div className="flex justify-between items-center gap-4"> 
        <PageHeader>Products</PageHeader>
        <Button>
            <Link href="/admin/proudcts/new"> Add Product </Link>
        </Button>
    </div>
    <ProductsTable />
        
    </> 
}

function ProductsTable(){

    return (
        <Table>

            <TableHeader>
                <TableRow>
                    <TableHead className="w-0">
                        <span className="sr-only">Avaliable for Purchase</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="w-0">
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
        </Table>
    )
}
import { PageHeader } from "../_components/PageHeader" 
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { db } from "@/server/db"
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react"
import { formatCurrency, formatNumber } from "@/lib/formatters"
import { DropdownMenu ,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ActiveToggleDropdownItem, DeleteDropdownItem } from "./_components/ProductActions"

export default function AdminProductsPage(){
    return <>
    <div className="flex justify-between items-center gap-4"> 
        <PageHeader>Products</PageHeader>
        <Button>
            <Link href="/admin/products/new"> Add Product </Link>
        </Button>
    </div>
    <ProductsTable />
        
    </> 
}

async function ProductsTable(){
    const products=await db.product.findMany(
        {select:{id:true,
            name:true,
            priceInCents:true,
            isAvailableForPurchase:true,
            _count:{select:{orders:true}}
        },orderBy:{name:"asc"}
    }
);
    if(products.length===0)return <p>No products found</p>


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
            <TableBody>
                {products.map(product=>(
                    <TableRow key={product.id}>
                        <TableCell>
                            {product.isAvailableForPurchase? 
                            (<><span className="sr-only">Availabe</span><CheckCircle2/></>
                            )
                            :
                            (<><span className="sr-only">UnAvailabe</span><XCircle className="stroke-destructive"   /></>)
                            }

                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{formatCurrency(product.priceInCents /100)}</TableCell>
                        <TableCell>{formatNumber(product._count.orders)}</TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <MoreVertical />
                                    <span className="sr-only">Actions</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                     <a download href={`/admin/products/${product.id}/download`}>Download</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                     <Link href={`/admin/products/${product.id}/edit`}>Edit</Link>
                                </DropdownMenuItem>
                                
                                <ActiveToggleDropdownItem id={product.id}
                                isAvailableForPurchase={product.isAvailableForPurchase}

                                
                                
                                />
                                <DeleteDropdownItem id={product.id}
                                disabled={product._count.orders>0}/>

                               

                            </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>

                    </TableRow>
                ))}






            </TableBody>
        </Table>
    )
}
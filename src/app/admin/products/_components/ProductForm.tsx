"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { formatCurrency } from "@/lib/formatters"
import { Textarea } from "@/components/ui/textarea"
import { addProduct, updateProduct } from "../../_actions/products"
import { useFormState, useFormStatus } from "react-dom"
import { useActionState } from "react"
import type { Product } from "@prisma/client"
import Image from "next/image"
export function ProductForm( {product}: {product? :Product | null}){
    const [error,action]=useActionState(product==null ? addProduct : updateProduct.bind(null,product.id) ,{})
    const [priceInCents, setPriceInCents] = useState<number | null>(product?.priceInCents ?? 0);
     return (
        <>
        <form action={action}   className="space-y-8">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                
                <Input type="text" id="name" name="name" required defaultValue={product?.name || ""}
                />
                {error.name&& <div className="text-destructive">{error.name}</div> }
            </div>
            <div className="space-y-2">
                <Label htmlFor="priceInCents">Price In Cents</Label>

                
                <Input
  type="number"
  id="priceInCents"
  name="priceInCents"
  required
  value={priceInCents === null ? "" : priceInCents}
  onChange={e => {
    const val = e.target.value;
    setPriceInCents(val === "" ? null : Number(val));
  }}
/>

                {error.priceInCents&& <div className="text-destructive">{error.priceInCents}</div> }
            <div className="text-muted-foreground">{formatCurrency(( priceInCents || 0) /100 )}</div>


            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                
                <Textarea  id="description" name="description" required defaultValue={product?.description || ""}/>
                {error.description&& <div className="text-destructive">{error.description}</div> }
            </div>
            <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                
                <Input type="file" id="file" name="file" required={product==null} />
                {product != null && (
                        <div className="text-muted-foreground">{product.filePath}</div>
                        )}
                        

                {error.file&& <div className="text-destructive">{error.file}</div> }
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                {product != null && (
                 <Image src={product.imagePath} height="400" width="400" alt="Product Image"/>)}

                <Input type="file" id="image" name="image" required={product==null}/>
                {error.image&& <div className="text-destructive">{error.image}</div> }
            </div>


            <SubmitButton/>
            
            
            
            
            
        </form></>
     )


}

function SubmitButton(){
    const {pending}=useFormStatus()

    return <Button type="submit" disabled ={pending}>{pending ?"Saving": "Save"}</Button>
}
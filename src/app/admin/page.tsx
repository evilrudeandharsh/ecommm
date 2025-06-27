import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function AdminPage(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grind-cols-3 gap-4">

            <Card>
                <CardHeader>
                    <CardTitle>Sales</CardTitle>
                    <CardDescription>description</CardDescription>
                    
                </CardHeader>
                <CardContent><p>Text</p></CardContent>
            </Card>
        </div>
    )
}
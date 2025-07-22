import { Nav, NavLink } from "../_components/Nav"

export const dynamic = "force-dynamic"

export default function Layout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return <>
        <Nav>
            <NavLink href="/Home">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/orders">My orders</NavLink>
            
        </Nav>
        <div className="container my-6">{children}</div>
    </>
  }

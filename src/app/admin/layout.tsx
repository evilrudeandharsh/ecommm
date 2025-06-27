import { Nav, NavLink } from "../_components/Nav"



export default function AdminLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return <>
        <Nav>
            <NavLink href="/admin">Dashboard</NavLink>
            <NavLink href="/admin/products">Products</NavLink>
            <NavLink href="/admin/Users">Users</NavLink>
            <NavLink href="/admin/orders">Orders</NavLink>
        </Nav>
        <div className="container my-6">{children}</div>
    </>
  }

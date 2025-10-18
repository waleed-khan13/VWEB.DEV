
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card";

const customers = [
  { id: "CUST001", name: "Liam Johnson", email: "liam@example.com", avatar: "/avatars/01.png", joined: "2023-01-15", totalSpent: "$1,250.00" },
  { id: "CUST002", name: "Olivia Smith", email: "olivia@example.com", avatar: "/avatars/02.png", joined: "2023-02-20", totalSpent: "$850.00" },
  { id: "CUST003", name: "Noah Williams", email: "noah@example.com", avatar: "/avatars/03.png", joined: "2023-03-10", totalSpent: "$2,350.00" },
  { id: "CUST004", name: "Emma Brown", email: "emma@example.com", avatar: "/avatars/04.png", joined: "2023-04-05", totalSpent: "$450.00" },
  { id: "CUST005", name: "James Jones", email: "james@example.com", avatar: "/avatars/05.png", joined: "2023-05-18", totalSpent: "$1,550.00" },
];


export default function AdminCustomersPage() {
  return (
    <div>
        <div className="flex items-center justify-between mb-8">
            <div>
            <h1 className="font-headline text-3xl font-bold">Customers</h1>
            <p className="text-muted-foreground mt-2">
                View and manage your customer database.
            </p>
            </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
            <div className="space-y-4">
                {customers.map((customer) => (
                    <Card key={customer.id}>
                        <CardContent className="p-4 flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={`https://picsum.photos/seed/${customer.id}/40/40`} alt={customer.name} />
                                    <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{customer.name}</p>
                                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                                    <p className="text-sm text-muted-foreground mt-2">Joined: {customer.joined}</p>
                                    <p className="text-sm font-medium">Spent: {customer.totalSpent}</p>
                                </div>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                                    <DropdownMenuItem>View Orders</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:block border rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Total Spent</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {customers.map((customer) => (
                        <TableRow key={customer.id}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={`https://picsum.photos/seed/${customer.id}/40/40`} alt={customer.name} />
                                        <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    {customer.name}
                                </div>
                            </TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.joined}</TableCell>
                            <TableCell>{customer.totalSpent}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                         <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                         </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                                        <DropdownMenuItem>View Orders</DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
  );
}


"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const orders = [
  { id: "ORD001", customer: "Liam Johnson", date: "2023-10-26", total: "$250.00", status: "Paid" },
  { id: "ORD002", customer: "Olivia Smith", date: "2023-10-25", total: "$150.00", status: "Pending" },
  { id: "ORD003", customer: "Noah Williams", date: "2023-10-24", total: "$350.00", status: "Paid" },
  { id: "ORD004", customer: "Emma Brown", date: "2023-10-23", total: "$450.00", status: "Shipped" },
  { id: "ORD005", customer: "James Jones", date: "2023-10-22", total: "$550.00", status: "Delivered" },
];

export default function AdminOrdersPage() {
  return (
    <div>
        <div className="flex items-center justify-between mb-8">
            <div>
            <h1 className="font-headline text-3xl font-bold">Orders</h1>
            <p className="text-muted-foreground mt-2">
                View and manage all customer orders.
            </p>
            </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
            <div className="space-y-4">
                {orders.map((order) => (
                    <Card key={order.id}>
                        <CardContent className="p-4 flex justify-between items-start">
                            <div>
                                <p className="font-semibold">{order.id} - {order.customer}</p>
                                <p className="text-sm text-muted-foreground">{order.date} - {order.total}</p>
                                <div className="mt-2">
                                <Badge variant={
                                    order.status === 'Paid' ? 'default' :
                                    order.status === 'Pending' ? 'secondary' :
                                    order.status === 'Shipped' ? 'outline' : 'destructive'
                                }>{order.status}</Badge>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                            </Button>
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
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>
                                <Badge variant={
                                    order.status === 'Paid' ? 'default' :
                                    order.status === 'Pending' ? 'secondary' :
                                    order.status === 'Shipped' ? 'outline' : 'destructive'
                                }>{order.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon">
                                    <Eye className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
  );
}

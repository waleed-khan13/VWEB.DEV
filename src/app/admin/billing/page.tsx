
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Download } from "lucide-react";

const billingHistory = [
  { id: "INV001", date: "2023-10-01", amount: "$99.00", status: "Paid" },
  { id: "INV002", date: "2023-09-01", amount: "$99.00", status: "Paid" },
  { id: "INV003", date: "2023-08-01", amount: "$99.00", status: "Paid" },
  { id: "INV004", date: "2023-07-01", amount: "$99.00", status: "Paid" },
];

export default function AdminBillingPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl font-bold">Billing</h1>
          <p className="text-muted-foreground mt-2">
            Manage your subscription, payment methods, and view your billing history.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Current Plan</CardTitle>
                    <CardDescription>You are currently on the Professional Plan.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-4xl font-bold font-headline">$99<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                            <p className="text-muted-foreground mt-1">Your plan renews on November 1, 2023.</p>
                        </div>
                        <Button>Upgrade Plan</Button>
                    </div>
                </CardContent>
                 <CardFooter className="text-xs text-muted-foreground">
                    To change or cancel your plan, please contact support.
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>The primary card used for all payments.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4 p-4 rounded-md border bg-secondary/50">
                        <CreditCard className="w-8 h-8 text-muted-foreground" />
                        <div className="flex-grow">
                            <p className="font-semibold">Visa ending in 1234</p>
                            <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                        </div>
                        <Button variant="outline">Update Card</Button>
                    </div>
                </CardContent>
            </Card>
        </div>

        <Card className="lg:col-span-1">
            <CardHeader>
                <CardTitle>Billing History</CardTitle>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {billingHistory.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium">{invoice.id}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell className="text-right">
                                     <Button variant="ghost" size="icon">
                                        <Download className="h-4 w-4" />
                                     </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

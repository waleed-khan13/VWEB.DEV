
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";

export default function AdminProfilePage() {
  return (
    <div>
        <div className="flex items-center justify-between mb-8">
            <div>
            <h1 className="font-headline text-3xl font-bold">Site Settings</h1>
            <p className="text-muted-foreground mt-2">
                Manage your site&apos;s branding and user profile.
            </p>
            </div>
        </div>
         <Card className="max-w-2xl mx-auto mt-8">
            <CardHeader>
                <CardTitle>Admin Profile</CardTitle>
                <CardDescription>Manage your personal administrator account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Admin User" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="info@vweb.dev" readOnly />
                </div>
            </CardContent>
             <CardFooter className="border-t pt-6">
                 <Button><Save className="mr-2"/>Update Profile</Button>
            </CardFooter>
        </Card>
    </div>
  );
}

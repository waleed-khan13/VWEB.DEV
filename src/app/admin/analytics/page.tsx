
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Smartphone, ScreenShare, AreaChart, PieChart as PieChartIcon } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-2">
            An overview of your application&apos;s performance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">in the last 6 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Desktop Users</CardTitle>
            <ScreenShare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">876</div>
            <p className="text-xs text-muted-foreground">~71% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Mobile Users</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">358</div>
            <p className="text-xs text-muted-foreground">~29% of total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2"><AreaChart /> User Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="space-y-4">
                      <div className="flex justify-between items-center">
                          <span>Desktop</span>
                          <div className="w-full bg-muted rounded-full h-4 mx-4">
                              <div className="bg-primary h-4 rounded-full" style={{ width: '71%' }}></div>
                          </div>
                          <span className="font-bold">71%</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span>Mobile</span>
                          <div className="w-full bg-muted rounded-full h-4 mx-4">
                              <div className="bg-accent h-4 rounded-full" style={{ width: '29%' }}></div>
                          </div>
                           <span className="font-bold">29%</span>
                      </div>
                  </div>
              </CardContent>
          </Card>
           <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2"><PieChartIcon /> Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-2">
                      <li className="flex justify-between"><span>Organic</span> <span className="font-bold">40%</span></li>
                      <li className="flex justify-between"><span>Direct</span> <span className="font-bold">30%</span></li>
                      <li className="flex justify-between"><span>Referral</span> <span className="font-bold">20%</span></li>
                      <li className="flex justify-between"><span>Social</span> <span className="font-bold">10%</span></li>
                  </ul>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}


"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingPlans as initialPricingPlans, Plan } from "@/lib/pricing-plans";
import { useCurrency } from "@/context/currency-context";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function AdminServicesPage() {
  const { formatPrice, currency } = useCurrency();
  const [plansData, setPlansData] = useState(initialPricingPlans);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<{plan: Plan, path: string[]} | null>(null);
  const [formData, setFormData] = useState<Plan | null>(null);

  const handleOpenDialog = (plan: Plan, path: string[]) => {
    setEditingPlan({ plan, path });
    setFormData({ ...plan });
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingPlan(null);
    setFormData(null);
  };
  
  const handleSave = () => {
    if (!formData || !editingPlan) return;
  
    // Create a deep copy of the state
    const newPlansData = JSON.parse(JSON.stringify(plansData));
  
    // Navigate to the correct offering and update the plan
    const [realmKey, subServiceKey, offeringKey] = editingPlan.path;
    const offering = newPlansData[realmKey].subServices[subServiceKey].offerings[offeringKey];
    const planIndex = offering.plans.findIndex((p: Plan) => p.name === editingPlan.plan.name);
  
    if (planIndex !== -1) {
      // Adjust price for saving: convert from current currency back to USD
      const newPrice = formData.price.amount !== null 
        ? formData.price.amount / currency.rate 
        : null;

      offering.plans[planIndex] = { ...formData, price: {...formData.price, period: formData.price.period, amount: newPrice } };
    }
  
    setPlansData(newPlansData);
    handleCloseDialog();
  };

  const handleFeatureChange = (index: number, value: string) => {
    if (!formData) return;
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    if (!formData) return;
    setFormData({ ...formData, features: [...formData.features, ""] });
  };
  
  const removeFeature = (index: number) => {
    if (!formData) return;
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };


  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl font-bold">Services & Pricing</h1>
          <p className="text-muted-foreground mt-2">
            Manage your service offerings, plans, and pricing.
          </p>
        </div>
        <Button disabled>
          <PlusCircle className="mr-2" />
          Add Service
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl" onInteractOutside={handleCloseDialog}>
          {formData && (
            <>
              <DialogHeader>
                <DialogTitle>Edit Plan: {formData.name}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 py-4 max-h-[70vh] overflow-y-auto pr-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Name</Label>
                  <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="description" className="text-right pt-2">Description</Label>
                  <Textarea id="description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="col-span-3" />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">Price ({currency.symbol})</Label>
                   <Input 
                        id="price" 
                        type="number"
                        value={formData.price.amount !== null ? (formData.price.amount * currency.rate).toFixed(2) : ''}
                        onChange={(e) => setFormData({
                            ...formData, 
                            price: {
                                ...formData.price, 
                                amount: e.target.value ? parseFloat(e.target.value) : null
                            }
                        })}
                        className="col-span-3" 
                        placeholder="Enter amount or leave blank for Custom"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="period" className="text-right">Period</Label>
                  <Input id="period" value={formData.price.period} onChange={(e) => setFormData({...formData, price: {...formData.price, period: e.target.value}})} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                    <Label className="text-right pt-2">Features</Label>
                    <div className="col-span-3 space-y-2">
                        {formData.features.map((feature, index) => (
                           <div key={index} className="flex items-center gap-2">
                             <Input value={feature} onChange={(e) => handleFeatureChange(index, e.target.value)} />
                             <Button variant="ghost" size="icon" onClick={() => removeFeature(index)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                             </Button>
                           </div>
                        ))}
                         <Button variant="outline" size="sm" onClick={addFeature}>
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Feature
                         </Button>
                    </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
                <Button onClick={handleSave}>Save Changes</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Accordion type="multiple" className="w-full space-y-4">
        {Object.entries(plansData).map(([realmKey, realm]) => (
          <AccordionItem key={realmKey} value={realmKey} className="border rounded-lg px-4">
            <AccordionTrigger className="text-2xl font-headline no-underline hover:no-underline">
              {realm.title}
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="multiple" className="w-full space-y-2">
                {Object.entries(realm.subServices).map(([subServiceKey, subService]) => (
                  <AccordionItem key={subServiceKey} value={subServiceKey} className="border rounded-lg px-4 bg-secondary/50">
                    <AccordionTrigger className="text-xl font-semibold no-underline hover:no-underline">
                      {subService.title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <Accordion type="multiple" className="w-full space-y-2">
                        {Object.entries(subService.offerings).map(([offeringKey, offering]) => (
                           <AccordionItem key={offeringKey} value={offeringKey} className="border rounded-lg px-4 bg-background">
                            <AccordionTrigger className="text-lg font-medium no-underline hover:no-underline">
                                {offering.title}
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                                <p className="text-muted-foreground mb-4">{offering.description}</p>
                                <div className="border rounded-lg">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Plan</TableHead>
                                                <TableHead>Price</TableHead>
                                                <TableHead>Features</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                        {offering.plans.map((plan: Plan) => (
                                            <TableRow key={plan.name}>
                                                <TableCell className="font-medium">{plan.name}</TableCell>
                                                <TableCell>
                                                    {plan.price.amount !== null
                                                        ? `${formatPrice(plan.price.amount)} ${plan.price.period}`
                                                        : "Custom"}
                                                </TableCell>
                                                <TableCell className="max-w-md">
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {plan.features.map(feature => <li key={feature}>{feature}</li>)}
                                                    </ul>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(plan, [realmKey, subServiceKey, offeringKey])}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </AccordionContent>
                           </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

    
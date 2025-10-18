
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { clientsData, Client } from "@/lib/clients";
import { Button } from "@/components/ui/button";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
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
import { useState, useEffect } from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// A component to safely render SVG strings or an image
function LogoDisplay({ logo, name }: { logo: Client['logo'], name: string }) {
  if (logo.type === 'svg') {
    return <div dangerouslySetInnerHTML={{ __html: logo.content }} className="h-12 w-12 flex items-center justify-center [&_svg]:h-12 [&_svg]:w-12"/>;
  }
  if (logo.type === 'url') {
    return <Image src={logo.content} alt={`${name} logo`} width={48} height={48} className="object-contain h-12 w-12" />;
  }
  return null;
}


export default function AdminClientsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clients, setClients] = useState(clientsData);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  
  const initialFormData = {
    name: "",
    logoType: "svg" as "svg" | "url",
    logoContent: "",
    imagePreview: null as string | null,
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (isDialogOpen) {
        if (editingClient) {
          setFormData({
            name: editingClient.name,
            logoType: editingClient.logo.type,
            logoContent: editingClient.logo.content,
            imagePreview: editingClient.logo.type === 'url' ? editingClient.logo.content : null,
          });
        } else {
          setFormData(initialFormData);
        }
    }
  }, [isDialogOpen, editingClient]);

  const handleOpenDialog = (client: Client | null) => {
    setEditingClient(client);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingClient(null);
  };

  const handleSave = () => {
    const newLogo = { type: formData.logoType, content: formData.logoContent };
    
    if (editingClient) {
      setClients(clients.map(p => p.id === editingClient.id ? { ...p, name: formData.name, logo: newLogo } : p));
    } else {
      const newClient: Client = {
        id: `client-${Date.now()}`,
        name: formData.name,
        logo: newLogo,
      };
      setClients([...clients, newClient]);
    }
    handleCloseDialog();
  };

  const handleDelete = (clientId: string) => {
    setClients(clients.filter(p => p.id !== clientId));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleLogoTypeChange = (value: "svg" | "url") => {
    setFormData(prev => ({ ...prev, logoType: value, logoContent: "", imagePreview: null }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setFormData(prev => ({ ...prev, logoContent: result, imagePreview: result }));
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl font-bold">Clients</h1>
          <p className="text-muted-foreground mt-2">
            Manage your official clients list.
          </p>
        </div>
        <Button onClick={() => handleOpenDialog(null)}>
          <PlusCircle className="mr-2" />
          Add Client
        </Button>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={(isOpen) => {
        if (!isOpen) {
            handleCloseDialog();
        } else {
            setIsDialogOpen(true);
        }
      }}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingClient ? "Edit Client" : "Add New Client"}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value={formData.name} onChange={handleInputChange} placeholder="Client Name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right pt-2">Logo Type</Label>
                <RadioGroup
                  value={formData.logoType}
                  onValueChange={handleLogoTypeChange}
                  className="col-span-3 flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="svg" id="svg" />
                    <Label htmlFor="svg">SVG</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="url" id="url" />
                    <Label htmlFor="url">Image Upload</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.logoType === 'svg' ? (
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="logoContent" className="text-right mt-2">
                    Icon (SVG)
                  </Label>
                  <Textarea id="logoContent" value={formData.logoContent} onChange={handleInputChange} placeholder='<svg>...</svg>' className="col-span-3 min-h-[120px]" />
                </div>
              ) : (
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="picture" className="text-right pt-2">
                    Image File
                  </Label>
                  <div className="col-span-3">
                     <Input id="picture" type="file" onChange={handleImageUpload} accept="image/png, image/jpeg, image/gif, image/webp" />
                     {formData.imagePreview && (
                        <div className="mt-4 p-2 border rounded-md w-32 h-32 flex items-center justify-center">
                           <Image src={formData.imagePreview} alt="Image preview" width={100} height={100} className="object-contain max-w-full max-h-full" />
                        </div>
                     )}
                  </div>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleSave}>Save Client</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>


      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Icon</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <LogoDisplay logo={client.logo} name={client.name} />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell className="text-right">
                   <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(client)}>
                     <Pencil className="h-4 w-4" />
                   </Button>
                   <AlertDialog>
                      <AlertDialogTrigger asChild>
                         <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                         </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete this client from your list.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(client.id)} className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                                Delete
                              </AlertDialogAction>
                          </AlertDialogFooter>
                      </AlertDialogContent>
                   </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

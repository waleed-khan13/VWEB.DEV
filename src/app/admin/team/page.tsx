
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { teamData as initialTeamData, TeamMember } from "@/lib/team";
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
import { useState, useEffect } from "react";
import Image from "next/image";
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
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";


export default function AdminTeamPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [team, setTeam] = useState(initialTeamData);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const teamImages = PlaceHolderImages.filter(img => img.id.startsWith('team-'));
  
  const initialFormData = {
    name: "",
    title: "",
    location: "",
    imageId: `team-${(team.length % 4) + 1}`,
  };

  const [formData, setFormData] = useState<Omit<TeamMember, 'id' | 'category'>>({
      name: "",
      title: "",
      imageId: `team-${(team.length % 4) + 1}`,
      location: "",
  });

  useEffect(() => {
    if (isDialogOpen) {
        if (editingMember) {
          setFormData({
            name: editingMember.name,
            title: editingMember.title,
            imageId: editingMember.imageId,
            location: editingMember.location || "",
          });
        } else {
           setFormData({
            name: "",
            title: "",
            location: "",
            imageId: `team-${(team.length % 4) + 1}`,
          });
        }
    }
  }, [isDialogOpen, editingMember, team.length]);

  const handleOpenDialog = (member: TeamMember | null) => {
    setEditingMember(member);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingMember(null);
  };

  const handleSave = () => {
    if (editingMember) {
      setTeam(team.map(m => m.id === editingMember.id ? { ...m, ...formData } : m));
    } else {
      const newMember: TeamMember = {
        id: `member-${Date.now()}`,
        ...formData,
        category: 'Team', // Default category for new members
      };
      setTeam([...team, newMember]);
    }
    handleCloseDialog();
  };

  const handleDelete = (memberId: string) => {
    setTeam(team.filter(m => m.id !== memberId));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };


  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl font-bold">Team</h1>
          <p className="text-muted-foreground mt-2">
            Manage your team members.
          </p>
        </div>
        <Button onClick={() => handleOpenDialog(null)}>
          <PlusCircle className="mr-2" />
          Add Member
        </Button>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingMember ? "Edit Team Member" : "Add New Member"}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value={formData.name} onChange={handleInputChange} placeholder="Member Name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input id="title" value={formData.title} onChange={handleInputChange} placeholder="Member Title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input id="location" value={formData.location} onChange={handleInputChange} placeholder="e.g., USA, UK, PK" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleSave}>Save Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>


      {/* Mobile View */}
        <div className="md:hidden">
            <div className="space-y-4">
                {team.map((member) => {
                    const image = teamImages.find(img => img.id === member.imageId);
                    return (
                        <Card key={member.id}>
                             <CardContent className="p-4 flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                     <Avatar>
                                        {image && <AvatarImage src={image.imageUrl} alt={member.name} />}
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{member.name}</p>
                                        <p className="text-sm text-muted-foreground">{member.title}</p>
                                        {member.location && <div className="text-xs text-muted-foreground">({member.location})</div>}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(member)}>
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
                                                    This action cannot be undone. This will permanently delete this team member.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDelete(member.id)} className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>

      {/* Desktop View */}
      <div className="hidden md:block border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {team.map((member) => {
              const image = teamImages.find(img => img.id === member.imageId);
              return (
              <TableRow key={member.id}>
                <TableCell>
                  <Avatar>
                    {image && <AvatarImage src={image.imageUrl} alt={member.name} />}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>
                  <div>{member.title}</div>
                  {member.location && <div className="text-xs text-muted-foreground">({member.location})</div>}
                </TableCell>
                <TableCell className="text-right">
                   <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(member)}>
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
                                This action cannot be undone. This will permanently delete this team member.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(member.id)} className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                                Delete
                              </AlertDialogAction>
                          </AlertDialogFooter>
                      </AlertDialogContent>
                   </AlertDialog>
                </TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

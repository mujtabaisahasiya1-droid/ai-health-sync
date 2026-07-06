import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">My Profile</h1>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="text-center">
                <p className="text-xl font-bold">Amina Yusuf</p>
                <p className="text-muted-foreground">amina.yusuf@example.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">Edit Profile</Button>
                <Button variant="outline" className="w-full justify-start">Change Password</Button>
                <Button variant="outline" className="w-full justify-start">Notifications</Button>
            </div>
        </CardContent>
      </Card>

      <Button variant="destructive" className="w-full">
          <LogOut className="w-4 h-4 mr-2"/>
          Logout
      </Button>
    </div>
  );
}

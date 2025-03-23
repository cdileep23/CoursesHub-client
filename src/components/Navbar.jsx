import { Menu, LibraryBig, LogOutIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import DarkMode from "./DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger
} from "@/components/ui/sheet";

const Navbar = () => {
  const user = true; // Replace with actual user state
  const userRole = "instrusctor"; // Could be "student", "instructor", etc.

  return (
    <div className="h-16 p-4 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - visible on all screens */}
        <Link to="/" className="flex items-center gap-2">
          <LibraryBig size={28} />
          <h1 className="font-extrabold text-xl md:text-2xl">
            CoursesHub
          </h1>
        </Link>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {user ? (
            <UserMenu userRole={userRole} />
          ) : (
            <AuthButtons />
          )}
          <DarkMode />
        </div>

        {/* Mobile Navigation - visible only on mobile */}
        <div className="flex md:hidden items-center gap-2">
          <DarkMode />
          <MobileMenu user={user} userRole={userRole} />
        </div>
      </div>
    </div>
  );
};

// Extracted User Menu Component with role-based access
const UserMenu = ({ userRole }) => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <Link to="/my-learning">
      <DropdownMenuLabel>My Learning</DropdownMenuLabel>
      </Link>
      
      <DropdownMenuItem>Edit Profile</DropdownMenuItem>
      <DropdownMenuItem className='flex items-center text-red-600'>
        <LogOutIcon color="red" size={12} className="mr-2" />
        Log Out
      </DropdownMenuItem>
      {userRole === "instructor" && (
        <>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
        </>
      )}
    </DropdownMenuContent>
  </DropdownMenu>
);

const AuthButtons = () => (
  <div className="flex items-center gap-3">
    <Button variant="outline">Login</Button>
    <Button>Sign Up</Button>
  </div>
);

const MobileMenu = ({ user, userRole }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button 
        size="icon" 
        className="rounded-full" 
        variant="outline"
      >
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader className="mb-2">
        <SheetTitle>CourseHub</SheetTitle>
      </SheetHeader>
      
      <div className="flex flex-col gap-6 mx-10">
        {user ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="font-medium">User Name</span>
            </div>
            <nav className="flex flex-col space-y-2">
              <Link to="/my-learning" className="py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                My Learning
              </Link>
              <Link to="/profile" className="py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                Edit Profile
              </Link>
              {userRole === "instructor" && (
                <Link to="/dashboard" className="py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                  Dashboard
                </Link>
              )}
              <button className="text-left py-2 px-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors text-red-500">
                <LogOutIcon size={14}/> 
                Log Out
              </button>
            </nav>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-6">
            <Button variant="outline" className="w-full">Login</Button>
            <Button className="w-full">Sign Up</Button>
          </div>
        )}
      </div>
      
      <SheetFooter className="mt-auto">
        <SheetClose asChild>
          <Button variant="outline" className="w-full">Close Menu</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Navbar;
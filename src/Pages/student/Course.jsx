import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-0">
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          alt="image"
          src="https://miro.medium.com/v2/resize:fit:1400/1*aF1u1vDDft_pzrZ0SlLRuw.png"
        />
      </div>
      <CardContent className="p-4">
        <h1 className="font-bold text-lg text-gray-900 dark:text-white hover:underline truncate mb-3">
          Next js Cmplete Course in Hindi{" "}
        </h1>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://miro.medium.com/v2/resize:fit:1400/1*aF1u1vDDft_pzrZ0SlLRuw.png"
                alt="User avatar"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm text-gray-700 dark:text-gray-300">Dileep</h1>
          </div>
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Advance</Badge>
        </div>
        <div>
          <span className="font-semibold text-gray-900 dark:text-white">₹499</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
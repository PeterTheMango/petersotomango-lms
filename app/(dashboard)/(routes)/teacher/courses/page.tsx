import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Teacher = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>Create a New Course</Button>
      </Link>
    </div>
  );
};

export default Teacher;

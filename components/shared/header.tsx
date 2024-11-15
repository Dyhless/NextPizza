import { cn } from "@/lib/utils";
import { Container } from "./container";
import React from "react";
import Image  from "next/image";
import { Button } from "../ui/button";

interface Props {
   className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
   return (
      <header className={cn('border border-b', className)}>
         <Container className="flex items-center justify-between py-8">
            
            {/*Left side*/}
            <div className="flex items-center gap-4">
               <Image src="/logo.png" width={35} height={35} alt="Logo" />
               <div>
                  <h1 className="text-2x1 uppercase font-black">Next Pizza</h1>
                  <p className="text-sm text-gray-400 leading-3">It can’t get any tastier</p>
               </div>
            </div>

            {/*Right side*/}
            <div className="flex items-center gap-3">
               <Button variant="outline">Enter</Button>
            </div>
         </Container>
      </header>
   );
};


import { cn } from "@/lib/utils";
import { Container } from "./container";
import React from "react";
// import { Image } from "next/image";

interface Props {
   className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
   return (
      <header className={cn('border border-b', className)}>
         <Container className="flex items-center justify-between py-8">
            
            {/*Left side*/}
            <div>
               {/* <Image src="logo.png" alt="Logo" width={32} height={3,2} />*/}
            </div>
         </Container>
      </header>
   );
};


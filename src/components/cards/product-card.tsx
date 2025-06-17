// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";

// interface ProductCardProps {
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   features: string[];
//   link: string;
//   delayIndex: number;
//   gradient: string;
// }

// const ProductCard = ({
//   icon: Icon,
//   title,
//   description,
//   features,
//   link,
//   delayIndex,
//   gradient,
// }: ProductCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: delayIndex * 0.1 }}
//       viewport={{ once: true }}
//     >
//       <Link href={link}>
//         <Card className="h-full group relative overflow-hidden pb-1 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-3xl">
//           {/* Background gradient animation */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//           ></div>

//           <CardContent className="relative z-10">
//             {/* Icon */}
//             <div className="relative mb-6">
//               <div
//                 className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} opacity-10 absolute inset-0 group-hover:scale-110 transition-transform duration-300`}
//               ></div>
//               <div
//                 className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} opacity-20 flex items-center justify-center relative z-10`}
//               >
//                 <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
//               </div>
//             </div>

//             <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
//               {title}
//             </h3>

//             <p className="text-muted-foreground mb-6 leading-relaxed">
//               {description}
//             </p>

//             <ul className="space-y-2 mb-6">
//               {features.map((feature, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center text-sm text-muted-foreground"
//                 >
//                   <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
//                   {feature}
//                 </li>
//               ))}
//             </ul>

//             {/* <div className="flex items-center text-primary font-medium group">
//               <span className="group-hover:translate-x-1 transition-transform duration-300">
//                 Learn more
//               </span>
//               <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
//             </div> */}
//           </CardContent>
//         </Card>
//       </Link>
//     </motion.div>
//   );
// };

// export default ProductCard;

import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  textColor?: string;
}

const ProductCard = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  bgColor,
  textColor = "text-gray-800",
}: ProductCardProps) => {
  return (
    <div
      className={`${bgColor} rounded-2xl p-6 relative overflow-hidden h-full flex flex-col`}
    >
      {/* Background decoration circles */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
          <p className={`text-sm opacity-90 ${textColor}`}>{description}</p>
        </div>

        {/* Features */}
        <div className="mb-4 flex-1">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`text-sm flex items-center ${textColor} opacity-90`}
              >
                <span className="w-1.5 h-1.5 bg-current rounded-full mr-3 opacity-60"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Learn more button */}
        <div className="mb-4">
          <button
            className={`flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity group`}
          >
            <span className="text-sm font-medium">Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product image */}
        <div className="flex justify-center mt-auto">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-24 h-24 object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

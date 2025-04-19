// "use client";

// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// export default function MiniCart({ items = [], subtotal = 0 }) {
//   const isEmpty = items.length === 0;

//   return (
//     <AnimatePresence>
//       <motion.div
//         key="mini-cart"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 15 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ duration: 0.2 }}
//         className="absolute top-full right-0 w-[320px] bg-off-white rounded-md text-off-black  z-50 p-5 shadow-lg"
//       >
//         <h4 className="text-sm font-semibold mb-4">Your Cart</h4>

//         {isEmpty ? (
//           <p className="text-sm text-neutral-500 text-nowrap">
//             Your cart is empty 🛒
//           </p>
//         ) : (
//           <>
//             <ul className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
//               {items.map((item) => (
//                 <li key={item.id} className="flex gap-15 items-center">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={56} // 14 * 4
//                     height={56}
//                     className="object-cover rounded object-top"
//                   />

//                   <div className="flex-1">
//                     <p className="text-sm font-medium">{item.title}</p>
//                     <p className="text-xs text-neutral-500">
//                       Qty: {item.quantity}
//                     </p>
//                   </div>
//                   <span className="text-sm font-semibold ml-15 ">
//                     £{item.price}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex justify-between mt-15 text-sm font-semibold">
//               <span>Subtotal</span>
//               <span>£{subtotal}</span>
//             </div>

//             <Link
//               href="/cart"
//               className="block mt-15 bg-accent-blue text-off-black text-center py-2 px-4 rounded-global text-sm"
//             >
//               View Full Cart
//             </Link>
//           </>
//         )}
//       </motion.div>
//     </AnimatePresence>
//   );
// }

"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function MiniCart({ items = [], subtotal = 0 }) {
  const isEmpty = items.length === 0;

  return (
    <AnimatePresence>
      <motion.div
        key="mini-cart"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 15 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full right-0 w-[320px] bg-off-white rounded-md text-off-black  z-50 p-5 shadow-lg"
      >
        <h4 className="text-sm font-semibold mb-4">Your Cart</h4>

        {isEmpty ? (
          <p className="text-sm text-neutral-500 text-nowrap">
            Your cart is empty 🛒
          </p>
        ) : (
          <>
            <ul className="flex flex-col gap-15 max-h-[300px] overflow-y-auto">
              {items.map((item) => (
                <li key={item.id} className="flex gap-15 items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={56} // 14 * 4
                    height={56}
                    className="object-cover rounded object-top"
                  />
                  <div className="flex-1">
                    <div className=" flex justify-between">
                      <p className="text-sm font-medium">{item.title}</p>
                      <span className="text-sm font-semibold ml-30  ">
                        £{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-15 text-sm font-semibold">
              <span>Subtotal</span>
              <span>£{subtotal}</span>
            </div>

            <Link
              href="/cart"
              className="block mt-15 bg-accent-blue text-off-black text-center py-2 px-4 rounded-global text-sm"
            >
              View Full Cart
            </Link>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

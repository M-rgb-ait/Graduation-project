"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import nookies from "nookies";
import { useAddWishlist } from "@/src/app/[locale]/(website)/wishlist/hooks/use-add-wishlist";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const { AddWishlist } = useAddWishlist();

  useEffect(() => {
    const cookiesData = nookies.get(null);

    if (cookiesData.user) {
      try {
        const parsedUser = JSON.parse(cookiesData.user);

        setTimeout(() => {
          setUserState(parsedUser);
        }, 0);
      } catch {
        console.error("Failed to parse user from cookies");
      }
    }
  }, []);

  // Sync wishlist from localStorage after login
  useEffect(() => {
    if (!user) return;

    const wishlist: string[] = JSON.parse(
      localStorage.getItem("wishlist") || "[]",
    );

    if (!wishlist.length) return;

    wishlist.forEach((productId) => {
      AddWishlist({ productId });
    });

    localStorage.removeItem("wishlist");
  }, [user, AddWishlist]);

  const setUser = (user: User | null) => {
    setUserState(user);

    if (user) {
      nookies.set(null, "user", JSON.stringify(user), {
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });
    } else {
      nookies.destroy(null, "user", {
        path: "/",
      });
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
}
// "use client";

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import nookies from "nookies";

// type User = {
//   firstName: string;
//   lastName: string;
//   email: string;
// };

// type UserContextType = {
//   user: User | null;
//   setUser: (user: User | null) => void;
// };

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export function UserProvider({ children }: { children: ReactNode }) {
//   const [user, setUserState] = useState<User | null>(null);

//   useEffect(() => {
//     //render setState setTimeout
//     const cookiesData = nookies.get(null);
//     if (cookiesData.user) {
//       try {
//         const parsedUser = JSON.parse(cookiesData.user);
//         setTimeout(() => {
//           setUserState(parsedUser);
//         }, 0);
//       } catch {
//         console.error("Failed to parse user from cookies");
//       }
//     }
//   }, []);

//   const setUser = (user: User | null) => {
//     setUserState(user);

//     if (user) {
//       nookies.set(null, "user", JSON.stringify(user), {
//         path: "/",
//         maxAge: 7 * 24 * 60 * 60,
//       });
//     } else {
//       nookies.destroy(null, "user", {
//         path: "/",
//       });
//     }
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUser() {
//   const context = useContext(UserContext);
//   if (!context) throw new Error("useUser must be used within UserProvider");
//   return context;
// }

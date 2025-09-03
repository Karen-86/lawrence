"use client";

import React, { useState, createContext, useContext } from "react";
import localData from "./localData";

const {
  aboutSample1Image,
  ourStoryCover1Image,
  ourStoryCover2Image,
  featuredSample1Image,
  featuredSample2Image,
  featuredSample3Image,
  featuredSample4Image,

  journalSample1Image,
  journalSample2Image,
  journalSample3Image,
  journalSample4Image,
  journalSample5Image,
  journalSample6Image,
  journalSample7Image,
} = localData.images;

type StateType = {
  [key: string]: any;
};

type ContextType = {
  state: StateType;
  setState: (newState: StateType) => void;
  actionCards: any;
  shopCards: any;
};

export const Context = createContext<ContextType | null>(null);

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState<StateType>({});

  // const actionCards = [
  //   {
  //     title: 'Suit Essentials',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'The Art of the Suit',
  //     suptitle: 'Article',
  //     image: journalSample2Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'All About Suits',
  //     suptitle: 'Article',
  //     image: journalSample3Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'Tailoring Explained',
  //     suptitle: 'Article',
  //     image: journalSample4Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'Mastering the Suit',
  //     suptitle: 'Article',
  //     image: journalSample5Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'Suit Up',
  //     suptitle: 'Article',
  //     image: journalSample6Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'Suit Basics',
  //     suptitle: 'Article',
  //     image: journalSample7Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },

  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },

  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },
  //   {
  //     title: 'The Modern Suit',
  //     suptitle: 'Article',
  //     image: journalSample1Image,
  //     link: 'suit-essentials',
  //     isFavourite: false,

  //   },

  // ]

  const actionCards = [
    {
      title: "Suit Essentials",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "suit-essentials",
      isFavourite: false,
    },
    {
      title: "The Art of the Suit",
      suptitle: "Article",
      image: journalSample2Image,
      slug: "the-art-of-the-suit",
      isFavourite: false,
    },
    {
      title: "All About Suits",
      suptitle: "Article",
      image: journalSample3Image,
      slug: "all-about-suits",
      isFavourite: false,
    },
    {
      title: "Tailoring Explained",
      suptitle: "Article",
      image: journalSample4Image,
      slug: "tailoring-explained",
      isFavourite: false,
    },
    {
      title: "Mastering the Suit",
      suptitle: "Article",
      image: journalSample5Image,
      slug: "mastering-the-suit",
      isFavourite: false,
    },
    {
      title: "Suit Up",
      suptitle: "Article",
      image: journalSample6Image,
      slug: "suit-up",
      isFavourite: false,
    },
    {
      title: "Suit Basics",
      suptitle: "Article",
      image: journalSample7Image,
      slug: "suit-basics",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
    {
      title: "The Modern Suit",
      suptitle: "Article",
      image: journalSample1Image,
      slug: "the-modern-suit",
      isFavourite: false,
    },
  ];

  const shopCards = [
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample1Image,
    },
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample2Image,
    },
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample3Image,
    },
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample1Image,
    },
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample2Image,
    },
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample3Image,
    },
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample1Image,
    },
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample2Image,
    },
    {
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample3Image,
    },

  ];

  return (
    <Context.Provider
      value={{
        state,
        ...state,
        setState,
        actionCards,
        shopCards,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useGlobalContext must be used within an Provider");
  }
  return context;
};

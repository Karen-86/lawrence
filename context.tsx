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
   actionCards: any
};

export const Context = createContext<ContextType | null>(null);

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState<StateType>({});


  const actionCards = [
    {
      title: 'The Art of the Suit',
      suptitle: 'Article',
      image: journalSample2Image,
      isFavourite: false
    },
    {
      title: 'All About Suits',
      suptitle: 'Article',
      image: journalSample3Image,
      isFavourite: false
    },
    {
      title: 'Tailoring Explained',
      suptitle: 'Article',
      image: journalSample4Image,
      isFavourite: false
    },
    {
      title: 'Mastering the Suit',
      suptitle: 'Article',
      image: journalSample5Image,
      isFavourite: false
    },
    {
      title: 'Suit Up',
      suptitle: 'Article',
      image: journalSample6Image,
      isFavourite: false
    },
    {
      title: 'Suit Basics',
      suptitle: 'Article',
      image: journalSample7Image,
      isFavourite: false
    },

    {
      title: 'The Modern Suit',
      suptitle: 'Article',
      image: journalSample1Image,
      isFavourite: false
    },


  ]

  return (
    <Context.Provider
      value={{
        state,
        ...state,
        setState,
        actionCards
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

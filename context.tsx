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

  categoryFormalBespokeCoverImage,
  categoryCasualBespokeCoverImage,
  categoryWeddingBespokeCoverImage,
  categoryWomenBespokeCoverImage,
  categoryFabricsCoverImage,

  gallerySample1Image,
  gallerySample2Image,
  gallerySample3Image,
  gallerySample4Image,
  gallerySample5Image,
  gallerySample6Image,
  gallerySample7Image,
  gallerySample8Image,
  gallerySample9Image,
  gallerySample10Image,
  gallerySample11Image,
  gallerySample12Image,
} = localData.images;

type StateType = {
  [key: string]: any;
};

type ContextType = {
  state: StateType;
  setState: (newState: StateType) => void;
  actionCards: any;
  shopCards: any;
  categories: any;
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
      id: '1',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample1Image,
    },
    {
      id: '2',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample2Image,
    },
    {
      id: '3',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample3Image,
    },
    {
      id: '4',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample1Image,
    },
    {
      id: '5',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample2Image,
    },
    {
      id: '6',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample3Image,
    },
    {
      id: '7',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample1Image,
    },
    {
      id: '8',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample2Image,
    },
    {
      id: '9',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample3Image,
    },

    {
      id: '10',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample1Image,
    },
    {
      id: '11',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample2Image,
    },
    {
      id: '12',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample3Image,
    },
    {
      id: '13',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample1Image,
    },
    {
      id: '14',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample2Image,
    },
    {
      id: '15',
      title: "Taupe Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: "£1,599.00",
      image: journalSample3Image,
    },
  ];

  const galleryItems = [
    { image: gallerySample1Image },
    { image: gallerySample2Image },
    { image: gallerySample3Image },
    { image: gallerySample4Image },
    { image: gallerySample5Image },
    { image: gallerySample6Image },
    { image: gallerySample7Image },
    { image: gallerySample8Image },
    { image: gallerySample9Image },
    { image: gallerySample10Image },
    { image: gallerySample11Image },
    { image: gallerySample12Image },


        { image: gallerySample1Image },
    { image: gallerySample2Image },
    { image: gallerySample3Image },
    { image: gallerySample4Image },
    { image: gallerySample5Image },
    { image: gallerySample6Image },
    { image: gallerySample7Image },
    { image: gallerySample8Image },
    { image: gallerySample9Image },
    { image: gallerySample10Image },
    { image: gallerySample11Image },
    { image: gallerySample12Image },
  ];

  const categories = [
    { title: "Formal Bespoke", slug: "formal-bespoke", image: categoryFormalBespokeCoverImage, galleryItems: galleryItems },
    { title: "Casual Bespoke", slug: "casual-bespoke", image: categoryCasualBespokeCoverImage, galleryItems: galleryItems },
    { title: "Wedding Bespoke", slug: "wedding-bespoke", image: categoryWeddingBespokeCoverImage, galleryItems: galleryItems },
    { title: "Women Bespoke", slug: "women-bespoke", image: categoryWomenBespokeCoverImage, galleryItems: galleryItems },
    { title: "Fabrics", slug: "fabrics", image: categoryFabricsCoverImage, galleryItems: galleryItems, className: "!mb-0" },
  ];

  return (
    <Context.Provider
      value={{
        state,
        ...state,
        setState,
        actionCards,
        shopCards,
        categories,
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

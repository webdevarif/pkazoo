import React from 'react'

import { FiX } from 'react-icons/fi';

interface DrawerProps {
  drawerToggle: Boolean,
  handleCloseFilter: string,
}

const DrawerFilter =({ drawerToggle, handleCloseFilter}: DrawerProps)=> {
  
  const Filter = {
    category : {
        heading: "Category",
        list: [
            {
                label: "Oil", 
            },
            {
                label: "Watercolor", 
            },
            {
                label: "Acrylic", 
            },
            {
                label: "Spray Paint", 
            },
            {
                label: "Ink", 
            },
            {
                label: "Gouache", 
            },
        ]
    },

    subject: {
        heading: "Subject",
        list: [
            {
                label: "Abstract", 
            },
            {
                label: "Land", 
            },
            {
                label: "Sea", 
            },
            {
                label: "People", 
            },
            {
                label: "Food", 
            },
            {
                label: "Pop", 
            },
            {
                label: "Abstract & geometric", 
            },
            {
                label: "Anime & cartoon", 
            },
            {
                label: "Architecture & cityscape", 
            },
            {
                label: "Beach & tropical", 
            },
            {
                label: "Comics & manga", 
            },
            {
                label: "Flowers", 
            },
            {
                label: "Geography & locale", 
            },
            {
                label: "Love & friendship", 
            },
            {
                label: "Love & friendship", 
            },
        ]
    },

    style: {
        heading: "Style",
        list: [
            {
                label: "Fine Art", 
            },
            {
                label: "Figurative", 
            },
            {
                label: "Realism", 
            },
            {
                label: "Modern", 
            },
            {
                label: "Expressionism", 
            },
            {
                label: "Impressionism", 
            },
        ]
    },

    location: {
        heading: "Shop Location",
        list: [
            {
                label: "Any where", 
            },
            {
                label: "Usa",  
            },
            {
                label: "Bangladesh", 
            },
        ]
    },

    itemType: {
        heading: "Item Type",
        list: [
            {
                label: "All Items", 
            },
            {
                label: "Hand Made",  
            },
            {
                label: "Vintage", 
            },
        ]
    },

    price: {
        heading: "Price ($)",
        radio_check: true, 
        list: [
            {
                label: "Any price", 
            },
            {
                label: "Under USD 25",  
            },
            {
                label: "USD 25 to USD 50", 
            },
            {
                label: "USD 50 to USD 100",  
            },
            {
                label: "Over USD 100", 
            },
        ]
    },

    color: {
        heading: "Color",
        radio_check: true, 
        list: [
            {
                label: "Black and White", 
                code: '#090909',
            },
            {
                label: "Red",  
                code: '#FF3A3A',
            },
            {
                label: "Orange", 
                code: '#FFA944', 
            },
            {
                label: "Green",  
                code: '#A7FF72',
            },
            {
                label: "Purple", 
                code: '#F095FF', 
            },
        ]
    },
}

  return (
    <>
      <h1>World</h1>
    </>
  )
}

export default DrawerFilter